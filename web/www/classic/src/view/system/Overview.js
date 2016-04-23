Ext.define("XApp.view.system.Overview", {
	extend : "Ext.panel.Panel",

	xtype : 'overview',
	itemId : 'overview', // for setActiveTab(id)
	cls : 'quarterly-main',
	
	requires : [
		'XApp.view.system.OverviewController',
		'XApp.view.system.OverviewModel',
		'Ext.chart.CartesianChart',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.CandleStick',
		'Ext.chart.series.Bar'],

	config : {
		activeState : null,
		defaultActiveState : 'clicks'
	},
	
	controller : "overview",
	viewModel : {
		type : "overview"
	},
	
	listeners:{
		render : 'refreshData'
	},

	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	overflowY : 'auto',
	items:[{
		xtype: 'container',
		flex: 3,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		//kLine and bar 
		items:[{
			//k line chart
			xtype : 'cartesian',
			flex : 3,
			bind : '{stockPrices}',
			axes : [{
				type : 'numeric',
				position : 'right',
				fields : [ 'open', 'high', 'low', 'close' ],
				grid : {
					lineDash : [ 2, 2 ],
					stroke : '#ccc'
				},
				style : {
					axisLine : false, //no axis
					majorTickSize : 0
				//no ticks
				}
			}, {
				type : 'category',
				position : 'bottom',
				fields : [ 'time' ],
				grid : {
					lineDash : [ 2, 2 ],
					stroke : '#ccc'
				},
				style : {
					axisLine : false,
					majorTickSize : 0
				}
			}],
			series : [{
				type : 'candlestick',
				background : 'rgba(220,220,220,0.2)',
				xField : 'time',
				openField : 'open',
				highField : 'high',
				lowField : 'low',
				closeField : 'close',
				style : {
					barWidth : 8,
					dropStyle : {
						fill : '#22c6ef',
						stroke : '#22c6ef'
					},
					raiseStyle : {
						//fill: '#f1495b',
						stroke : '#f1495b'
					}
				}
		  }]
		},{

			xtype: 'cartesian',
			flex : 1,
			bind: '{stockPrices}',
	        axes: [{
	            type: 'numeric',
	            position: 'right',
	            fields: ['amount']
	        }, {
	            type: 'category',
	            position: 'bottom',
	            fields: ['time']
	        }],
	        series: [{
	            type: 'bar',
	            axis: 'left',
	            xField: 'time',
	            yField: 'amount',
	            style : {
					barWidth : 5
	            },
	            renderer: function(sprite, config, rendererData, index){
	            	var data = rendererData.store.getData().items[index];
	            	var raise =  data.data.open > data.data.close;
	            	return {fillStyle: raise ? '#22c6ef' : '#f1495b'};
	            }
	        }]
		}]
	},{
		xtype: 'container',
		flex: 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		//three tables:
		items:[{
			xtype : 'grid',
			flex : 4,
			bind : {
				title : '{i18n.table_order}',
				store: '{orders}'
			},
			hideHeaders : true,
			columns: [{
				text: 'orderName', dataIndex: 'orderName',flex: 1
			},{ 
				text: 'orderPrice',  dataIndex: 'orderPrice', flex: 2,
				renderer: function(value) {
					return Ext.String.format('<span style="color: #0f0">{0}</span>', value);
				}
			},{
				text: 'orderAmount', dataIndex: 'orderAmount',flex: 2,
				renderer: function(value) {
					return Ext.String.format('<span style="color: #ff0">{0}</span>', value);
				}
			}]
		},{
			xtype : 'grid',
			flex: 4,
			bind : {
				title : '{i18n.table_current}',
				store: '{currentState}'
			},
			hideHeaders : true,
			columns: [{
				text: 'currentStateTypeName', dataIndex: 'currentStateTypeName',flex: 1
			},{ 
				text: 'currentStatePrice',  dataIndex: 'currentStatePrice', flex: 1,
			}]
		},{
			xtype : 'grid',
			flex : 2,
			bind : {
				title : '{i18n.table_lasted}',
				store: '{lastedTime}'
			},
			hideHeaders : true,
			columns: [{
				text: 'lastedTime', dataIndex: 'lastedTime',flex: 2
			},{ 
				text: 'lastedPrice',  dataIndex: 'lastedPrice',flex: 2
			},{ 
				text: 'lastedAmount',  dataIndex: 'lastedAmount',flex: 2
			},{ 
				text: 'lastedType',  dataIndex: 'lastedType',flex : 1,
				renderer: function(value) {
					return Ext.String.format('<span style="color: {0}">{1}</span>'
							, value == 1 ? 'red' : 'blue', value==1 ? 'B' : 'S');
			}
			}]
		}]
	}],
	validStates : {
		clicks : 1,
		redemption : 1,
		sales : 1,
		goalsmet : 1
	},

	isValidState : function(state) {
		return state in this.validStates;
	}
});
