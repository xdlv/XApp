Ext.define("XApp.model.StockPrice", {
	extend : 'XApp.model.Base',
	requires : ['Ext.data.field.Date'],

    proxy: {
        url: 'stock!obtainStockPrice.cmd',
        reader: {
            type: 'json',
            rootProperty: 'stockPrice'
        }
    },

	fields : [{
		name: 'orderName',
		calculate: function (data) {
			var s = "一";
			switch(data.orderNum)
			{
			case 2:
				 s = "二";
			  break;
			case 3:
				 s = "三";
			  break;
			case 4:
				 s = "四";
			  break;
			case 5:
				 s = "五";
			  break;
			default:
			  break;
			}
	        return (data.orderType == 1 ? '买' : '卖') + s;
	    }
	},{
		name : 'currentStateTypeName',
		calculate: function (data) {
			switch(data.currentStateType)
			{
			case 1:
				 return "现价";
			  break;
			case 2:
				 return "今开";
			  break;
			case 3:
				 return "涨跌";
			  break;
			case 4:
				 return "最高";
			  break;
			case 5:
				 return "涨幅";
			case 6:
				 return "最低";
			case 7:
				 return "总量";
			case 8:
				 return "量比";
			case 9:
				 return "外盘";
			case 10:
				 return "内盘";
			default:
			  return '';
			}
	    }
	},{
		name: 'open', type: 'number'
	},{
		name: 'high', type: 'number'
	},{
		name: 'low', type: 'number'
	},{
		name: 'close', type: 'number'
	},{
		name: 'amount', type: 'number'
	},{
		name: 'time', type: 'number'
	},{
		name: 'orderType', type: 'number'
	},{
		name: 'orderNum', type: 'number'
	},{
		name: 'currentStateType', type: 'number'
	},'currentStatePrice']
});