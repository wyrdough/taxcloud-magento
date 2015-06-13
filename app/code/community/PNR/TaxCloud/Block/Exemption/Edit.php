<?php

class PNR_TaxCloud_Block_Exemption_Edit extends Mage_Core_Block_Template {
    
    public function _prepareLayout() {
        $this->getLayout()->getBlock('head')
            ->setTitle(Mage::helper('taxcloud')->__('Tax Exemption Certificate'));
            
        return parent::_prepareLayout();
    }
}