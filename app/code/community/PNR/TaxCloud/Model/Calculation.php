<?php

class PNR_TaxCloud_Model_Calculation extends Mage_Tax_Model_Calculation {
    
    protected $_rateCacheOne;
    
    public function getRateRequest($shippingAddress = null, $billingAddress = null,
                                   $customerTaxClass = null, $store = null) {
        $request = parent::getRateRequest($shippingAddress, $billingAddress,
                                          $customerTaxClass, $store);
        $request->setShippingAddress($shippingAddress);
        
        return $request;
    }
    
    /**
     * I'd use an observer here now that the request object has enough info
     * to make the request, but I'd prefer to short-circuit the caching
     */
    public function getRate($request) {      
        if((!$request->getPostcode() or !preg_match('/^[0-9]{5}(?:-[0-9]{4})?/', $request->getPostcode())) and
            (!$request->getCity() or !$request->getRegionId())) {
            // No possibility of looking up proper rate, pass off to parent in case there
            // are tables loaded
            return parent::getRate($request);
        }
        
        if(isset($this->_rateCacheOne)) {
            return $this->_rateCacheOne;
        }
        
        if($request->getCountryId() !== "US") {
            return parent::getRate($request);
        }
        $this->unsRateValue();
        $this->unsCalculationProcess();
        $this->unsEventModuleId();
        Mage::dispatchEvent('tax_rate_data_fetch', array('request'=>$request));
        if(!$this->hasRateValue) {
            // No manna from heaven
            $helper = Mage::helper('taxcloud/webservice');
            $rate = $helper->sendLookup($request);
            $this->setCalculationProcess('webservice');
            $this->setRateValue($rate);
        }
        $this->_rateTest = $this->getRateValue();
        return $this->getRateValue();
    }
    
    //public function calcTaxAmount()
}