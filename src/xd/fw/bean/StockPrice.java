package xd.fw.bean;

/**
 * 股票价格
 */
public class StockPrice {

	//展示的数据类型：1 kLine 2 order 3 currentState 4 lasted info
	private int dataType;
	
	// type = 1
	private int open, high, low, close, amount;
	private int time;
	
	//type =2
	private int orderType, orderNum;
	private float orderPrice;
	private int orderAmount;
	
	//type = 3
	private int currentStateType;
	private String currentStatePrice;
	
	//type = 4
	private int lastedTime;
	private float lastedPrice;
	private int lastedAmount;
	private int lastedType;
	
	private StockPrice(int dataType){
		this.dataType = dataType;
	}
	
	public static StockPrice kLine(int open, int high, int low, int close, int amount, int time){
		StockPrice stockPrice = new StockPrice(1);
		stockPrice.open = open;
		stockPrice.high = high;
		stockPrice.low = low;
		stockPrice.close = close;
		stockPrice.amount = amount;
		stockPrice.time = time;
		return stockPrice;
	}
	
	public static StockPrice order(int orderType, int orderNum, float orderPrice,int orderAmount){
		StockPrice stockPrice = new StockPrice(2);
		stockPrice.orderType = orderType;
		stockPrice.orderNum = orderNum;
		stockPrice.orderPrice = orderPrice;
		stockPrice.orderAmount = orderAmount;
		return stockPrice;
	}
	public static StockPrice currentType(int currentStateType, String currentStatePrice){
		StockPrice stockPrice = new StockPrice(3);
		stockPrice.currentStateType = currentStateType;
		stockPrice.currentStatePrice = currentStatePrice;
		return stockPrice;
	}
	public static StockPrice lastedTime(int lastedTime, float lastedPrice, int lastedAmount,int lastedType){
		StockPrice stockPrice = new StockPrice(4);
		stockPrice.lastedTime = lastedTime;
		stockPrice.lastedPrice = lastedPrice;
		stockPrice.lastedAmount = lastedAmount;
		stockPrice.lastedType = lastedType;
		return stockPrice;
	}

	public int getDataType() {
		return dataType;
	}

	public void setDataType(int dataType) {
		this.dataType = dataType;
	}

	public int getOpen() {
		return open;
	}

	public void setOpen(int open) {
		this.open = open;
	}

	public int getHigh() {
		return high;
	}

	public void setHigh(int high) {
		this.high = high;
	}

	public int getLow() {
		return low;
	}

	public void setLow(int low) {
		this.low = low;
	}

	public int getClose() {
		return close;
	}

	public void setClose(int close) {
		this.close = close;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public int getOrderType() {
		return orderType;
	}

	public void setOrderType(int orderType) {
		this.orderType = orderType;
	}

	public int getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(int orderNum) {
		this.orderNum = orderNum;
	}

	public float getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(float orderPrice) {
		this.orderPrice = orderPrice;
	}

	public int getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(int orderAmount) {
		this.orderAmount = orderAmount;
	}

	public int getCurrentStateType() {
		return currentStateType;
	}

	public void setCurrentStateType(int currentStateType) {
		this.currentStateType = currentStateType;
	}

	public String getCurrentStatePrice() {
		return currentStatePrice;
	}

	public void setCurrentStatePrice(String currentStatePrice) {
		this.currentStatePrice = currentStatePrice;
	}

	public int getLastedTime() {
		return lastedTime;
	}

	public void setLastedTime(int lastedTime) {
		this.lastedTime = lastedTime;
	}

	public float getLastedPrice() {
		return lastedPrice;
	}

	public void setLastedPrice(float lastedPrice) {
		this.lastedPrice = lastedPrice;
	}

	public int getLastedAmount() {
		return lastedAmount;
	}

	public void setLastedAmount(int lastedAmount) {
		this.lastedAmount = lastedAmount;
	}

	public int getLastedType() {
		return lastedType;
	}

	public void setLastedType(int lastedType) {
		this.lastedType = lastedType;
	}
}
