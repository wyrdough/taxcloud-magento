<?php

/* @var Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$table = $installer->getConnection()->newTable(
            $installer->getTable('taxcloud/exemption'))
            ->addColumn('entity_id', Varien_Db_Ddl_Table::TYPE_INTEGER, null, array(
                'identity' => true,
                'unsigned' => true,
                'nullable' => false,
                'primary'  => true
            ), 'Entity Id')
            ->addColumn('customer_id', Varien_Db_Ddl_Table::TYPE_INTEGER, null, array(
                'nullable' => false
            ), 'Customer Id')
            ->addColumn('taxcloud_id', Varien_Db_Ddl_Table::TYPE_VARCHAR, null, array(
                'nullable' => false
            ), 'TaxCloud Cert ID');

$installer->getConnection()->createTable($table);

$installer->getConnection()->addColumn(
    $this->getTable('sales/quote'), 'tax_exemption_id',
    'INTEGER(11)');

$installer->getConnection()->addColumn(
        $this->getTable('sales/order'), 'tax_exemption_id',
        'INTEGER(11)');
    
$installer->getConnection()->addColumn(
        $this->getTable('sales/invoice'), 'tax_exemption_id',
        'INTEGER(11)');

$installer->endSetup();