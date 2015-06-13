<?php
 
class PNR_TaxCloud_Model_Source_Group
{
 
    public function toOptionArray()
    {
        $groups = Mage::getResourceModel('customer/group_collection')
            ->addFieldToFilter('customer_group_id', array('gt'=> 0))
            ->load()
            ->toOptionArray();
 
        array_unshift($groups, array(
            'value' => 0,
            'label' => Mage::helper('core')->__('All Customer Groups')
        ));
 
        return $groups;
    }
}