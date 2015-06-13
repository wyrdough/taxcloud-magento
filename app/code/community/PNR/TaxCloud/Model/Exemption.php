<?php

class PNR_TaxCloud_Model_Exemption extends Mage_Core_Model_Abstract {
    
    /**
     * @param int $customer_id Customer whose exemptions should be retrieved
     * @return array Exemptions suitable for json encoding
     */
    public function getExemptions($customer_id) {
        $ret = array('cert_list' => array());
        /* @var PNR_TaxCloud_Helper_Webservice */
        $ws = Mage::helper('taxcloud/webservice');
        
        $result = $ws->getExemptCertificates($customer_id);
        $certs = $result->GetExemptCertificatesResult->ExemptCertificates;
        
        return $certs;
    }
    
    protected function _construct() {
        $this->_init('taxcloud/exemption');
    }
    
    protected function _afterLoad() {
        /* Make WS call to fill out the object */
        /* @var PNR_TaxCloud_Helper_Webservice */
//        $ws = Mage::helper('taxcloud/webservice');
        
//        $cert = $ws->getExemptCertificate($this->getCustomerId(), $this->getId());
    }
    
}