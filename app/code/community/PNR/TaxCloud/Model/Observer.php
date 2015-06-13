<?php

class PNR_TaxCloud_Model_Observer extends Mage_Core_Model_Observer {
    
    public function handleInvoicePay($observer) {
        $invoice = $observer->getInvoice();
        if(!empty($invoice)) {
            Mage::helper('taxcloud/webservice')->sendCaptured($invoice);
        }
    }
    
    public function handlePayment($observer) {
        Mage::helper('taxcloud/webservice')->sendAuthorized($observer);
    }
    
    public function handleRefund($observer) {
        $payment = $observer->getPayment();
        $creditmemo = $observer->getCreditmemo();
        Mage::helper('taxcloud/webservice')->sendReturned($payment, $creditmemo);
        
    }
    
    public function scrubAddress($address) {
        Mage::helper('taxcloud/webservice')->verifyAddress($address);
    }
}