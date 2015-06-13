<?php

class PNR_TaxCloud_Helper_Data extends Mage_Core_Helper_Abstract {

    public function getExemptionIndexPath() {
        if($this->isExemptAllowed()) {
            return 'tax/customer/exemptions';
        }
    }
    
    public function getExemptionIndexName() {
        if($this->isExemptAllowed()) {
            return $this->__('tax_exemption');
        }
    }
    
    public function getExemptionIndexLabel() {
        if($this->isExemptAllowed()) {
            return $this->__('Exemption Certificates');
        }
    }

    public function isExemptAllowed() {
        /* @var $session Mage_Customer_Model_Session */
        $session = Mage::getSingleton('customer/session');
        
        if(!Mage::getStoreConfig('tax/taxcloud/enabled')) {
            return false;
        }
        
        $allowed = Mage::getStoreConfig('tax/taxcloud/exemption_allowed');
        $allowed_ids = explode(',', Mage::getStoreConfig('tax/taxcloud/exemption_allowed_groups'));
        
        
        if($session->isLoggedIn() && $allowed &&
           ((in_array($session->getCustomerGroupId(), $allowed_ids)) ||
            (in_array(0, $allowed_ids)))) {
            return true;
        }
    }
}