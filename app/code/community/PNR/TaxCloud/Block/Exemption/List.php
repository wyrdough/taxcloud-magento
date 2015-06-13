<?php

class PNR_TaxCloud_Block_Exemption_List extends Mage_Core_Block_Template {
    
    public function _prepareLayout() {
        $this->getLayout()->getBlock('head')
            ->setTitle(Mage::helper('taxcloud')->__('Tax Exemption Certificate'));
            
        return parent::_prepareLayout();
    }
    
    public function getExemptions() {
        $customer_id = $this->getCustomer()->getId();
        
        $collection = Mage::getModel('taxcloud/exemption')
                        ->getExemptions($customer_id);
        $collection->load();
        
        return $collection;
    }
    
    public function getCustomer() {
        
    }
}