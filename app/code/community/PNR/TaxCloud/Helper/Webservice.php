<?php

require_once('USPSCityStateLookup.php');

class PNR_TaxCloud_Helper_Webservice extends Mage_Core_Helper_Abstract {

    protected $_wsdl;
    protected $_uspsid;
    protected $_uspspass;
    protected $_soapClient;
    protected $_cart;
    protected $_tic;
    protected $_userid;
    protected $_apikey;
    protected $_cachePrefix;

    public function __construct() {
        $this->_wsdl = $this->getConfigData('wsdl');
        $this->_usps = $this->getConfigData('uspsid');
        $this->_uspspass = $this->getConfigData('uspspass');
        $this->_tic = $this->getConfigData('tic');
        $this->_userid = $this->getConfigData('login');
        $this->_apikey = $this->getConfigData('api_key');
        /* @var $this->_soapClient Zend_Soap_Client */
        $this->_soapClient = new Zend_Soap_Client('https://api.taxcloud.net/1.0/?wsdl');
        $this->_cachePrefix = 'pnr_taxcloud_';
        return $this;
    }
    
    /*
     * @param Mage_Customer_Model_Address $address  Address to verify
     */
    public function verifyAddress($address) {
        $ws_method = 'VerifyAddress';
        if(!$this->isUsAddress($address)) {
            return $address;
        }

        $params = $this->addressToArray($address);
        // This particular API call, unlike all others, requires the
        // elements in lowercase
        $params = array_change_key_case($params);
        $params = array_merge($params, array('uspsUserID' => $this->_usps));
        $verified = $this->dispatchRequest($ws_method, $params)->VerifyAddressResult;
        //print_r($verified);
        
        
        if($verified->ErrNumber) {
            Mage::log('Failed to verify address:'.$verified->Messages->ResponseMessage->Message);
        } else {
            $address->setStreet(array($verified->Address1, (empty($verified->Address2)) ? '' : $verified->Address2));
            $address->setCity($verified->City);
            $address->setRegionId(Mage::getModel('directory/region')->loadByCode($verified->State,
                                  Mage::getStoreConfig('general/country/default'))->getId());
            $address->setRegionCode(Mage::getModel('directory/region')->load($address->getRegionId)->getCode());
            $address->setPostcode(implode('-', array($verified->Zip5, $verified->Zip4)));
        }
    }

    /*
     *  @param    The cart object which we are taxing
     */
    
    public function sendLookup($request) {
        $ws_method = 'Lookup';
        $taxcloud_id = false;
        $this->_store = $request->getStore();
        $product_tax_id = $request->getProductClassId();
        $shipping_tax_id = Mage::getStoreConfig(Mage_Tax_Model_Config::CONFIG_XML_PATH_SHIPPING_TAX_CLASS);
        $tic = $this->getTic($product_tax_id);
        
        if($request->getCountryId() !== "US") {
            return 0;
        }
        
        /* @var $address Mage_Sales_Model_Quote_Address */
        $address = $request->getShippingAddress();
        if(empty($address)) {
            return 0;
        }
        $dest = $this->addressToArray($address);
        if(empty($dest['Address1']) && empty($dest['City'])) {
            // This will not be fruitful, let's hope there's a zip code
            if(empty($dest['Zip5']) || strlen($dest['Zip5']) < 5) {
                // We're fucked, give up now.
                return 0;
            }
            
            $city_lookup = new USPSCityStateLookup($this->_usps);
            $city_lookup->setTestMode(0);
            $city_lookup->addZipCode($dest['Zip5']);
            $city_lookup->lookup();
            if($city_lookup->isError()) {
                // failure to look up, return zero
                return 0;
            }
            $response = $city_lookup->getArrayResponse();
            $city = $response['CityStateLookupResponse']['ZipCode']['City'];
            $state = $response['CityStateLookupResponse']['ZipCode']['State'];
            $zip5 = $response['CityStateLookupResponse']['ZipCode']['Zip5'];
            $regionid = Mage::getModel('directory/region')
                                    ->loadByCode($state, "US")
                                    ->getId();
            $address->setCity($city);
            $address->setRegionId($regionid);
            $address->setRegionCode($state);
            $address->setPostcode($zip5);
            
            $dest = $this->addressToArray($address);
        }
        
        if(!empty($dest['Address1']) && !empty($dest['City'])) {
            // Do we have what looks like a valid zip+4?
            if((!ctype_digit($dest['Zip5']) || (strlen($dest['Zip5']) != 5)) ||
               (!ctype_digit($dest['Zip4']) || (strlen($dest['Zip4']) != 4))) {
                // scrub
                $this->verifyAddress($address);
            }
        }
            
        $exemption_id = Mage::getSingleton('checkout/session')->getTaxExemptionId();
        if(is_numeric($exemption_id)) {
            $exemption = Mage::getModel('taxcloud/exemption')
                ->load($exemption_id);
            if($exemption->getId()) {
                $taxcloud_id = $exemption->getData('taxcloud_id');
            }        
        }
        
        $cachekey = $this->getRateCacheKey($address, $tic, $exemption_id);
        $cache = Mage::app()->getCache();
        
        $cached_rate = $cache->load($cachekey);
        if($cached_rate !== false) {
            return $cached_rate;
        }
        
        if(empty($customerId)) {
            $customerId = 0;
        }
        
        if(empty($cartId)) {
            $cartId = 0;
        }
        
        $cartItems = array('CartItem' => $this->getDummyProduct($product_tax_id));
        
        $params = array(
            'customerID'    =>  $customerId,
            'cartID'        =>  $cartId,
            'cartItems'     =>  $cartItems,
            'origin'        =>  $this->getOriginArray(),
            'destination'   =>  $this->addressToArray($request->getShippingAddress()),
            'deliveredBySeller' => false
        );
        
        if($taxcloud_id) {
            $params['exemptCert'] = array('CertificateID' => $taxcloud_id);
        }
        
        $response = $this->dispatchRequest($ws_method, $params);
        
        $result = $response->LookupResult;
        
        // Check $result->ResponseType to be "OK"
        if($result->ResponseType !== "OK" || !isset($result->CartItemsResponse->CartItemResponse)) {
            Mage::log('Tax calculation returned bad/useless status');
            $ret = 0;
        } else {
            $amt = $result->CartItemsResponse->CartItemResponse->TaxAmount;
            $rate = $amt / ($params['cartItems']['CartItem']['Price'] * $params['cartItems']['CartItem']['Qty']);
            $ret = $rate * 100;
        }
        
        $cache->save((string) $ret, $cachekey, array($this->_cachePrefix.'rate'), 86400);
        
        return $ret;
    }

    /**
     *  Sends a lookup based on an order
     *  This is deliberately not cached to ensure the request is sent
     *
     *  @param Mage_Sales_Model_Order $order
     */
    
    public function sendLookupOrder($order) {
        $taxcloud_id = null;
        $ws_method = 'Lookup';
        
        // Luckily, getCartItems will work when passed an order
        $cartItems = $this->getCartItems($order);
        
        // Check for and add an exemption cert, if necessary
        if($exemption_id = $order->getData('tax_exemption_id')) {
            $exemption = Mage::getModel('taxcloud/exemption')
                ->load($order->getData('tax_exemption_id'));
            
            if($exemption->getId()) {
                $taxcloud_id = $exemption->getData('taxcloud_id');
            }
        }
        $customerId = $order->getCustomerId();
        if(empty($customerId)) {
            $customerId = 0;
        }
        
        $params = array(
            'customerID'    =>  $customerId,
            'cartID'        =>  $order->getQuoteId(),
            'cartItems'     =>  $cartItems,
            'origin'        =>  $this->getOriginArray(),
            'destination'   =>  $this->addressToArray($order->getShippingAddress()),
            'deliveredBySeller' => false
        );
        
        if($taxcloud_id) {
            $params['exemptCert'] = array('CertificateID' => $taxcloud_id);
        }
        
        $response = $this->dispatchRequest($ws_method, $params);
    }

    /**
     *  @param Mage_Sales_Model_Order_Payment $payment   Cart object for item retrieval
     */

    public function sendAuthorized($observer) {
        $ws_method = 'Authorized';

        $payment = $observer->getPayment();
        
        // Make sure this order shipped to the US.
        // @var $address Mage_Sales_Model_Order_Address
        $address = $payment->getOrder()->getShippingAddress();
        if($address->getCountry() !== 'US') {
            // We don't handle these
            return;
        }
        
        $customerid = $payment->getOrder()->getCustomerId();
        if(empty($customerid)) {
            $customerid = 0;
        }
        
        //$customerid = $payment->getOrder()->getCustomerId();
        $createdat = $payment->getOrder()->getCreatedAt();
        $date = date("c", strtotime($createdat));
        
        // Send one last lookup with the final state of the order
        // before sending the captured request
        
        $this->sendLookupOrder($payment->getOrder());
        
        $params = array(
            'customerID'    =>  $customerid,
            'cartID'        =>  $payment->getOrder()->getQuoteId(),
            'orderID'       =>  $payment->getOrder()->getRealOrderId(), //$payment->getOrder()->getId(),
            'dateAuthorized'=>  $date
        );
        
        $response = $this->dispatchRequest($ws_method, $params);
        
        // Say bye to the exemption ID on the checkout session
        Mage::getSingleton('checkout/session')->unsTaxExemptionId();      
    }
    /**
     *  @param Mage_Sales_Model_Order_Invoice $invoice
     */
    public function sendCaptured($invoice) {
        $ws_method = 'Captured';
        
        // Make sure this order shipped to the US.
        // @var $address Mage_Sales_Model_Order_Address
        $address = $invoice->getShippingAddress();
        if($address->getCountry() !== 'US') {
            // We don't handle these
            return;
        }
        
        Mage::log('TaxCloud Captured invoice ID: '.$invoice->getOrderId()); 
        $params = array('orderID'   =>  $invoice->getOrder()->getRealOrderId());
        
        $response = $this->dispatchRequest($ws_method, $params);
        
        // If the response is an error, send an authorize and then recapture
    }
    
    /**
     *  @param Mage_Sales_Model_Order_Payment       $payment
     *  @param Mage_Sales_Model_Order_Creditmemo    $creditmemo
     */
    public function sendReturned($payment, $creditmemo) {
        $ws_method = 'Returned';
        
        $orderId = $creditmemo->getOrder()->getRealOrderId();
        $address = $creditmemo->getShippingAddress();

        // Make sure this order shipped to the US.
        // @var $address Mage_Sales_Model_Order_Address
        if($address->getCountry() !== 'US') {
            // We don't handle these
            return;
        }

        
        $cartItems = $this->getCartItems($address);
        
        // Credit memos are weird
        foreach($cartItems as $key => $val) {
            if($val['Price'] == 0) {
                unset($cartItems[$key]);
            }
        }
        
        $cartItems = array_values($cartItems);
        foreach($cartItems as $k => $v) {
            $cartItems[$k]['Index'] = $k + 1;
        }
        
        $params = array(
            'orderID'       =>  $orderId,
            'cartItems'     =>  $cartItems,
            'returnedDate'  =>  date("c")
        );
        
        $response = $this->dispatchRequest($ws_method, $params);
        
    }
    
    public function addExemptCertificate($params) {
        $ws_method = 'AddExemptCertificate';
        
        $result = $this->dispatchRequest($ws_method, $params);
        
        if($result->ResponseType !== "OK") {
            // handle error
        }
        
        $taxcloud_id = $result->AddExemptCertificateResult->CertificateID;
        
        return $taxcloud_id;
    }

    public function getExemptCertificate($customer_id, $exemption_id) {
        $response = $this->getExemptCertificates($customer_id);
        
        $result = $response->getExemptCertificatesResult;
        
        if(!is_object($result) || $result->ResponseType !== "OK") {
            // Handle error
        }
        
        $certs = $result->ExemptCertificates;
        $cert = $certs->ExemptionCertificate;
        
        if(is_array($cert)) {
            foreach($cert as $c) {
                if($c->CertificateID == $exemption_id) {
                    return $c;
                }
            }
            /* Whoops, how did we end up here? */
        }
    }
    
    public function getExemptCertificates($customer_id) {
        $ws_method = 'GetExemptCertificates';
        
        $params = array(
            'customerID'    =>  $customer_id  
        );
        
        $response = $this->dispatchRequest($ws_method, $params);
        /* check for errors, pls */
        
        return $response; /* or json, or array? */
    }
    
    public function deleteExemptCertificate($exemption_id) {
        $ws_method = 'DeleteExemptCertificate';
        
        $params = array('certificateID' => $exemption_id);
        
        $response = $this->dispatchRequest($ws_method, $params);
        
        if($response->DeleteExemptCertificateResponse->ResponseType == "OK") {
            return true;
        } else {
            return false;
        }
    }
    
    private function addressToArray($address) {
        if(!$address || !$address->getId()) {
            return $this->getOriginArray();
        }
        $ret = array(
            'Address1'  =>  (string)$address->getStreet(1),
            'Address2'  =>  (string)$address->getStreet(2),
            'City'      =>  (string)$address->getCity(),
            'State'     =>  (string)$this->getRegionCode($address->getRegionId()),
            'Zip5'      =>  (string)substr($address->getPostcode(), 0, 5),
            'Zip4'      =>  (string)strlen($address->getPostcode()) == 9 ? substr($address->getPostcode(), 5, 4) : ''
        );
        
        //print_r($ret);
        
        $postcode = $address->getPostcode();
        if(strstr($postcode, '-')) {
            $zips = explode('-', $postcode);
            
            $a = array('Zip5'=>$zips[0],'Zip4'=>$zips[1]);
        } else {
            $a = array('Zip5'=>substr($address->getPostcode(), 0, 5),
                       'Zip4' => strlen($address->getPostcode()) == 9 ? substr($address->getPostcode(), 5, 4) : '');
        }
        
        $ret = array_merge($ret, $a);
        
        return $ret;
    }
    
    private function getDummyProduct($tax_class) {
        
        $tic = $this->getTic($tax_class);
        
        $taxitem = array(
            'Index'     =>  1,
            'ItemID'    =>  'DummyProduct',
            'TIC'       =>  $tic,
            'Price'     =>  '100.00',
            'Qty'       =>  1
        );
        
        return $taxitem;
    }
    
    private function getTic($tax_class) {
        // Is this a TIC?
        if(strlen($tax_class) == 6) {
            $tic = $tax_class;
        } elseif($tax_class == 4) { // shipping
            $tic = '11010';
        } else {
            $tic = $this->_tic;
        }
        
        return $tic;  
    }
    
    private function getRegionCode($regionId) {
        return Mage::getModel('directory/region')->load($regionId)->getCode();
    }
    
    private function getOriginArray() {
        $els = array(
            'street_line1'  =>  'Address1',
            'street_line2'  =>  'Address2',
            'city'          =>  'City',
        );
        $path = "shipping/origin/";
        $ret = array();
        
        $street1 = Mage::getStoreConfig("${path}street_line1");
        $street2 = Mage::getStoreConfig("${path}street_line2");
        $city = Mage::getStoreConfig("${path}city");
        $postcode = Mage::getStoreConfig("{$path}postcode");
        
        if(strstr($postcode, '-')) {
            $foo = explode('-', $postcode);
            $ret = array_merge($ret, array('Zip5' => $foo[0]), array('Zip4' => $foo[1]));
        } else {
            $ret = array_merge($ret, array('Zip5' => substr($postcode, 0, 5)));
            $ret = array_merge($ret, array('Zip4' => substr($postcode, 5, 4)));
        }
        $regioncode = Mage::getModel('directory/region')
                        ->load(Mage::getStoreConfig("{$path}region_id"))->getCode();

        /* @var $testshit Mage_Directory_Model_Region */
        
        $ret = array_merge($ret, array('State' => $regioncode, 'Address1' => $street1,
                                'Address2' => $street2, 'City' => $city));
        
        return $ret;
    }
    
    /**
     *  @param Mage_Sales_Model_Quote_Address $address   Cart object for item retrieval
     *
     *  This will also take a Mage_Sales_Model_Creditmemo
     *  ..err, not any more :(
     */
    
    private function getCartItems($address) {
        $itemlist = array();
        $j = 1;
        /* @var $mageitem Mage_Sales_Model_Quote_Item */
        foreach($address->getAllItems() as $mageitem) {
            if($mageitem->isDeleted() || $mageitem->getParentItemId()) {
                continue;
            }
            
            // In case this is an order or a credit memo..
            $qty = $mageitem->getQtyOrdered();
            if(is_null($qty)) {
                $qty = $mageitem->getQty();
            }
        
            if($discount = $mageitem->getDiscountAmount()) {
                $price = $mageitem->getBasePrice();
                if($qty > 1) {
                    $rowprice = $price * $qty;
                    $rowafterdisc = $rowprice - $discount;
                    $price = $rowafterdisc / $qty;
                } else {
                    $price = $price - $discount;
                }
            } else {
                $price = $mageitem->getBasePrice();
            }
            
            $taxitem = array(
                'Index'     =>  $j,
                'ItemID'    =>  $mageitem->getSku(),
                'TIC'       =>  $this->_tic,
                'Price'     =>  $price,
                'Qty'       =>  $qty
            );
            array_push($itemlist, $taxitem);
            $j++;
        }

        // If shipping charges exist, get them and add them to the request
        if((is_object($address) && $address->getShippingAmount())) {
            $shipping = $address->getShippingAmount();
            // Terrible hack
            $method = $address->getShippingMethod();
            if(!isset($method)) {
                return $itemlist;
            }
            
            $foobar = array();
            $foobar = explode('_', $method);
            $shipping_code = $foobar[0];
        
            $handling_fee = Mage::getStoreConfig('carriers/'.$shipping_code.'/handling_fee');
            $handling_type = Mage::getStoreConfig('carriers/'.$shipping_code.'/handling_type');
            
            // We only handle handling_type HANDLING_TYPE_FIXED, and assume one shipment per order
            if($handling_type == Mage_Shipping_Model_Carrier_Abstract::HANDLING_TYPE_FIXED) {
                $handling = $handling_fee;
            } else {
                $handling = 0;
            }
            
            if($shipping < $handling) {
                // The shipping actually charged is less than handling configured,
                // so handling is nothing.
                $handling = 0;
            }
            // We have a shipping amount, add a shipping item
            $taxitem = array(
                'Index'     => $j,
                'ItemID'    => 'SHIPPING_'.$shipping_code,
                'TIC'       => '11010', // $this::SHIPPING_TIC,
                'Price'     =>  $shipping - $handling,
                'Qty'       =>  1
            );
            
            array_push($itemlist, $taxitem);
            $j++;
            
            if($handling > 0) {
                $taxitem = array(
                    'Index'     =>  $j,
                    'ItemID'    =>  'HANDLING_'.$shipping_code,
                    'TIC'       =>  '11000', // $this::HANDLING_TIC,
                    'Price'     =>  $handling,
                    'Qty'       =>  1
                );
                
                array_push($itemlist, $taxitem);
            }   
        }
        return $itemlist;
    }
    
    private function dispatchRequest($type, $params=array()) {
        if($type !== "VerifyAddress") {
            $myparams = array(
                'apiLoginID'    =>  $this->_userid,
                'apiKey'        =>  $this->_apikey
            );
            $params = array_merge($params, $myparams);
            //$params = array(params);
        }
        //print_r($params);
        try {
            $foobar = $this->_soapClient->__call($type, array($params));
                                            //                  array(
                                            //"uspsUserID"    =>  "280NWACG1203",
                                            //"address1"      =>  "3104 e 14 st",
                                            //"address2"      =>  "",
                                            //"city"          =>  "tulsa",
                                            //"state"         =>  "ok",
                                            //"zip5"          =>  "",
                                            //"zip4"          =>  "")));
        }
        catch(SoapFault $exception) {
            Mage::log("Exception: " . $exception .':'. $this->_soapClient->getLastRequest());
            // Try again
            try {
                $foobar = $this->_soapClient->__call($type, array($params));
            }
            catch(SoapFault $exception) {
                // Ok, this is getting ridiculous..bail
                Mage::log("Failed second web service call try");
            }
        }
        Mage::log('SOAP Request: ' . $this->_soapClient->getLastRequest());
        Mage::log('SOAP Response: ' . $this->_soapClient->getLastResponse());
        if(!empty($foobar)) {
            return $foobar;
        } else {
            return array();
        }
    }
    
    /*
     * @param Mage_Customer_Model_Address $address
     */
    
    private function isUsAddress($address) {
        return $address->getCountryId() === "US";
    }
    
    private function getConfigData($field)
    {
        $path = 'tax/taxcloud/'.$field;
        return Mage::getStoreConfig($path, $this->getStore());
    }

    private function getCart() {
        return $this->_cart;
    }
    
    private function setCart($cart) {
        return $this->_cart = $cart;
    }
    
    private function getStore() {
        return Mage::app()->getStore();
    }
    
    /**
     * Get cache key for rate lookup
     *
     * @param Mage_Sales_Model_Quote_Address $address
     * @param string $tic
     *
     * @return string Cache key
     */
    
    private function getRateCacheKey($address, $tic, $exempt=null) {
        if(empty($exempt)) {
            return $address->getPostcode().'|'.$tic;
        } else {
            return $address->getPostcode().'|'.$tic.'|1';
        }
    }
    
    private function isAdmin() {
        if(Mage::app()->getStore()->isAdmin())
        {
            return true;
        }

        if(Mage::getDesign()->getArea() == 'adminhtml')
        {
            return true;
        }

        return false;
    }
}
