Ext.define('XApp.view.system.OverviewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.overview',
    
    refreshData : function(){
    	Ext.interval(this.doRefreshData,2000, this);
    },
    doRefreshData: function(){
    	this.getView().getViewModel().getStore('allStockPrices').load();
    }
});
