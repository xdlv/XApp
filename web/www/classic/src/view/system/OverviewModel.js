Ext.define('XApp.view.system.OverviewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.overview',
    requires : ['XApp.model.StockPrice'],
    data: {
        table_order: '订单薄',
        table_current: '实时数据',
        table_lasted: '当前成交'
    },
    stores : {
    	allStockPrices: {
    		model : 'StockPrice',
    		autoLoad: true,
    		
    	},
    	stockPrices: {
    		source : '{allStockPrices}',
    		filters: [{
                property: 'dataType',
                value: 1
            }]
    	},
    	orders: {
    		source : '{allStockPrices}',
    		filters: [{
                property: 'dataType',
                value: 2
            }]
    	},
    	currentState: {
    		source : '{allStockPrices}',
    		filters: [{
                property: 'dataType',
                value: 3
            }]
    	},
    	lastedTime: {
    		source : '{allStockPrices}',
    		filters: [{
                property: 'dataType',
                value: 4
            }]
    	}
    }
});
