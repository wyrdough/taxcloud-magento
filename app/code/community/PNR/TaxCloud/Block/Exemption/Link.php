<?php

class PNR_TaxCloud_Block_Exemption_Link extends Mage_Core_Block_Template {
    
    public function _toHtml() {
        // Check that user is allowed before rendering
        $allowed = explode(',', Mage::getStoreConfig('tax/taxcloud/exemption_allowed'));
        $groups = explode(',', Mage::getStoreConfig('tax/taxcloud/exemption_allowed_groups'));
        
        // 0 means 'no groups'
        if($allowed == 0) {
            return;
        }
        
        $group = Mage::getSingleton('customer/session')->getCustomerGroupId();
        
        if(!in_array($group, $groups) && !in_array(0, $groups)) {
            return;
        }
        
        return parent::_toHtml();
    }
    
    public function _prepareLayout() {
        return parent::_prepareLayout();
    }
    
    protected function _construct() {
        return parent::_construct();
    }
    
}