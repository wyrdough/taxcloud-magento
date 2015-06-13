<?php

class PNR_TaxCloud_AjaxController extends Mage_Core_Controller_Front_Action {
    
    public function preDispatch() {
        parent::preDispatch();
        
        $action = $this->getRequest()->getActionName();
        $loginUrl = Mage::helper('customer')->getLoginUrl();
        
        if(!Mage::getSingleton('customer/session')->isLoggedIn()) {
            $this->setFlag('', self::FLAG_NO_DISPATCH, true);
        }
    }
    
    public function indexAction() {
        echo "Foo!";
    }
    
    /* Apply exemption to order */
    public function applyExemptionAction() {
        $result = array();
        /* @var Mage_Core_Controller_Request_Http */
        $request = $this->getRequest();
        $exempt_id = $request->getParam('certificateID');

        $this->getResponse()->setHeader('Content-type', 'application/json');
        
        /* Bad scene */
        if(empty($exempt_id)) {
            $result = array('Status' => 'Failed', 'Message' => 'No exemption ID found');
            $response = Mage::helper('core')->jsonEncode($result);
            $this->getResponse()->setBody($response);
            return;
        }
        
        $quote = $this->getQuote();
        /* @var PNR_TaxCloud_Model_Exemption */
        $exemption = Mage::getModel('taxcloud/exemption')->load($exempt_id, 'taxcloud_id');
                
        $quote->setData('tax_exemption_id', $exemption->getId());
        $quote->save();
        
        // Also save the exemption ID on the checkout session
        Mage::getSingleton('checkout/session')->setTaxExemptionId($exemption->getId());
        
        $result = array('Status' => 'OK');
        $response = Mage::helper('core')->jsonEncode($result);
        $this->getResponse()->setBody($response);
    }
    
    public function addExemptionAction() {
        $cert = array();
        $customer_id = Mage::getSingleton('customer/session')->getCustomerId();
        $request = $this->getRequest();
        
        $in = $request->getParams();
                
        $params = array('customerID' => $customer_id,
            'exemptCert' => array(
                'Detail' => array(
                    'ExemptStates' => array(
                        'ExemptState' => array(
                            'StateAbbr' => $in['ExemptState'],
                            'ReasonForExemption' => $in['PurchaserExemptionReason'],
                            'IdentificationNumber' => $in['IDNumber']
                        ),
                    ),
                    'SinglePurchase' => ($in['BlanketPurchase'] !== 'checked') ? 1 : 0,
                    'SinglePurchaseOrderNumber' => $in['SinglePurchaseOrderNumber'],
                    'PurchaserFirstName' => $in['PurchaserFirstName'],
                    'PurchaserLastName' => $in['PurchaserLastName'],
                    'PurchaserAddress1' => $in['PurchaserAddress1'],
                    'PurchaserCity' => $in['PurchaserCity'],
                    'PurchaserState' => $in['PurchaserState'],
                    'PurchaserZip' => $in['PurchaserZip'],
                    'PurchaserTaxID' => array(
                        'TaxType' => $in['TaxType'],
                        'IDNumber' => $in['IDNumber'],
                        'StateOfIssue' => $in['StateOfIssue']
                    ),
                    'PurchaserBusinessType' => $in['PurchaserBusinessType'],
                    'PurchaserExemptionReason' => $in['PurchaserExemptionReason'],
                    'CreatedDate' => date("c"),
                ),
            )
        );
        
        array_merge($cert, array('CustomerID' => $customer_id));
        $taxcloud_id = Mage::helper('taxcloud/webservice')->addExemptCertificate($params);
        if(!empty($taxcloud_id)) {
            $exemption = Mage::getModel('taxcloud/exemption');
            $exemption->setData('customer_id', $customer_id);
            $exemption->setData('taxcloud_id', $taxcloud_id);
            $exemption->save();
            
            $quote = $this->getQuote();
            $quote->setData('tax_exempt_id', $exemption->getId());
            $quote->save();
        }
    }
    
    public function removeExemptionAction() {
        $exemption_id = $this->getRequest()->getParam('certificateID');
        
        $exemption = Mage::getModel('taxcloud/exemption')->load($exemption_id, 'taxcloud_id');
        $result = Mage::helper('taxcloud/webservice')->deleteExemptCertificate($exemption_id);
        if($result) {
            $exemption->delete();
        } else {
            throw Mage::exception('Mage_Core', 'Could not delete TC exempt certificate: '.$exemption_id);
        }
    }
    
    public function listExemptionsAction() {
        $customer_id = Mage::getSingleton('customer/session')->getCustomerId();
        $exempts_obj = Mage::getModel('taxcloud/exemption')->getExemptions($customer_id);
        
        $cert_list = array();

        foreach($exempts_obj as $e) {
            $states_array = array();
            foreach($e->Detail->ExemptStates as $s) {
                array_push($states_array, array('ExemptState' => $s->StateAbbr));
            }
            $detail = $e->Detail;
            $foo = array(
                'CertificateID' =>  $e->CertificateID,
                'ExemptionCertificateDetail' => array(
                    'ArrayOfExemptStates' => $states_array,
                    'SinglePurchase' => $detail->SinglePurchase,
                    'SinglePurchaseOrderNumber' => ($detail->SinglePurchaseOrderNumber == 'false') ? '' : $detail->SinglePurchaseOrderNumber,
                    'DateEntered' => date("F j, Y", strtotime($detail->CreatedDate)),
                    'PurchaserFirstName' => $detail->PurchaserFirstName,
                    'PurchaserLastName' => $detail->PurchaserLastName,
                    'PurchaserAddress1' => $detail->PurchaserAddress1,
                    'PurchaserAddress2' => '',
                    'PurchaserCity' => $detail->PurchaserCity,
                    'PurchaserState' => $detail->PurchaserState,
                    'PurchaserZip' => $detail->PurchaserZip,
                    'TaxIDType' => $detail->PurchaserTaxID->TaxType,
                    'PurchaserTaxID' => $detail->PurchaserTaxID->IDNumber,
                    'PurchaserBusinessType' => $detail->PurchaserBusinessType,
                    'PurchaserBusinessTypeOtherValue' => '',
                    'PurchaserExemptionReason' => $detail->PurchaserExemptionReason,
                    'PurchaserExemptionReasonValue' => empty($detail->PurchaserExemptionReasonValue) ? '' : $detail->PurchaserExemptionReasonValue
                ),
                
            );
            array_push($cert_list, $foo);
        }

        $response_array = array('cert_list' => $cert_list);
        
        $response = Mage::helper('core')->jsonEncode($response_array);
        
        $out = "taxcloudCertificates(" . $response .')';
        //$out = 'taxcloudCertificates({ "NOTICE" : "THIS JSONP FEED IS INTENDED FOR TAXCLOUD METCHANTS ONLY.", "COPYRIGHT" : "COPYRIGHT 2011 FEDTAX", "LICENSE" : "USE GOVERNED BY THE TAXCLOUD TERMS OF SERVICE (https://taxloud.net/tos/)", "cert_list":[{ "CertificateID":"b7fd09ec-2c9f-4613-91b7-d1668c0aa72a", "ExemptionCertificateDetail":{ "ArrayOfExemptStates":[ {"ExemptState":"AL"}, {"ExemptState":"AR"}, {"ExemptState":"GA"}, {"ExemptState":"TX"}, {"ExemptState":"MN"}, {"ExemptState":"MS"}, {"ExemptState":"MO"}, {"ExemptState":"FL"} ], "SinglePurchase":"false", "SinglePurchaseOrderNumber":"", "DateEntered":"January 31, 2011", "PurchaserFirstName":"David", "PurchaserLastName":"Campbell", "PurchaserAddress1":"162 East Avenue", "PurchaserAddress2":"", "PurchaserCity":"Norwalk", "PurchaserState":"CT", "PurchaserZip":"06851", "TaxIDType":"FEIN", "PurchaserTaxID":"**-****789", "PurchaserBusinessType":"AccommodationAndFoodServices", "PurchaserBusinessTypeOtherValue":"", "PurchaserExemptionReason":"FederalGovernmentDepartment", "PurchaserExemptionReasonValue":"FedGov ID" }}, {"CertificateID":"00022", "ExemptionCertificateDetail":{ "ArrayOfExemptStates":[ {"ExemptState":"WA"} ], "CertificateID":"00001", "SinglePurchase":"true", "SinglePurchaseOrderNumber":"66556", "DateEntered":"January 31, 2011", "PurchaserFirstName":"R. David L.", "PurchaserLastName":"Campbell", "PurchaserAddress1":"3205 South Judkins", "PurchaserAddress2":"", "PurchaserCity":"Seattle", "PurchaserState":"WA", "PurchaserZip":"98144", "PurchaserTaxID":"***-**-9012", "PurchaserBusinessType":"Other", "PurchaserBusinessTypeOtherValue":"Internet Sales Tax Prep", "PurchaserExemptionReason":"Industrial Production Or Manufacturing", "PurchaserExemptionReasonValue":"Widgets" }} ] })';
        
        $this->getResponse()->setHeader('Content-type', 'application/json');
        $this->getResponse()->setBody($out);
    }

private function getQuote() {
    
    if($this->isAdmin()) {
        $quote = Mage::getSingleton('adminhtml/session_quote')->getQuote();
    } else {
        $quote = Mage::getSingleton('checkout/session')->getQuote();
    }
    
    return $quote;
}
    
   private function isAdmin() {
        if(Mage::app()->getStore()->isAdmin()) {
            return true;
        }

        if(Mage::getDesign()->getArea() == 'adminhtml') {
            return true;
        }

        return false;
    }
}