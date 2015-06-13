<?php

/**
 *
 */

class PNR_TaxCloud_CustomerController extends Mage_Core_Controller_Front_Action {
    
    /**
     * Is customer authenticated?
     */
    
    public function preDispatch() {
        parent::preDispatch();
        $action = $this->getRequest()->getActionName();
        $loginUrl = Mage::helper('customer')->getLoginUrl();
        
        if(!Mage::getSingleton('customer/session')->authenticate($this, $loginUrl)) {
            $this->setFlag('', self::FLAG_NO_DISPATCH, true);
        }
    }
    
    public function exemptionsAction() {
        $this->loadLayout();
        $this->_initLayoutMessages('customer/session');
        
        $this->renderLayout();
    }
    
    public function addAction() {
        $this->loadLayout();
        $this->_initLayoutMessages('customer/session');
        
        $this->renderLayout();
    }
    
    public function removeAction() {
        $this->loadLayout();
        $this->_initLayoutMessages('customer/session');
        
        $this->renderLayout();
    }
    
    public function applyAction() {
        
    }
    
    public function testAction() {
        $response = '<html><head><script type="text/javascript" src="/js/jquery/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="/js/starplugins/jquery-noconflict.js"></script>
        <script type="text/javascript" src="/js/pnr/taxcloud_cert.js"></script><body>
        <span id="xmptlink">Are you tax exempt?</span></body>';
        $this->getResponse()->setBody($response);
    }
}
