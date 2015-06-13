<?php

class PNR_TaxCloud_Model_Resource_Exemption extends Mage_Core_Model_Resource_Db_Abstract {
    
    protected function _construct() {
        $this->_init('taxcloud/exemption', 'entity_id');
    }
    
}