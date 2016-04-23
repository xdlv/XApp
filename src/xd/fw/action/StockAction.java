package xd.fw.action;

import org.springframework.stereotype.Controller;
import xd.fw.bean.StockPrice;

import java.util.ArrayList;
import java.util.List;

@Controller
public class StockAction extends BaseAction {
	private List<StockPrice> stockPrice;
	static int z =0;
	public String obtainStockPrice() {
		stockPrice = new ArrayList<StockPrice>();
		if (z++ > 1000){
			z = 1;
		}
		List<StockPrice> stockPriceTemp = new ArrayList<StockPrice>();
		for (int i=0;i<5;i++){
			stockPriceTemp.add(StockPrice.kLine(600, 614, 578, 590, 100,8*i +  1));
			stockPriceTemp.add(StockPrice.kLine(590, 609, 550, 570, 200,8*i +  2));
			stockPriceTemp.add(StockPrice.kLine(570, 590, 540, 550, 300, 8*i + 3));
			stockPriceTemp.add(StockPrice.kLine(550, 570, 520, 530, 400, 8*i + 4));
			stockPriceTemp.add(StockPrice.kLine(530, 590, 550, 570, 100,8*i + 5));
			stockPriceTemp.add(StockPrice.kLine(570, 600, 580, 590, 200, 8*i + 6));
			stockPriceTemp.add(StockPrice.kLine(590, 602, 565, 595, 300, 8*i + 7));
			stockPriceTemp.add(StockPrice.kLine(595, 614, 581, 600, 400, 8*i + 8));
		}
		
		for (int i=z; i< z + stockPriceTemp.size();i++){
			StockPrice temPrice = stockPriceTemp.get(i % stockPriceTemp.size());
			stockPrice.add(StockPrice.kLine(temPrice.getOpen(),temPrice.getHigh(),temPrice.getLow(),temPrice.getClose(),temPrice.getAmount(),i));
		}
		
		stockPrice.add(StockPrice.order(2, 5, 7.01f, 10843));
		stockPrice.add(StockPrice.order(2, 4, 7.00f, 10843));
		stockPrice.add(StockPrice.order(2, 3, 6.59f, 10843));
		stockPrice.add(StockPrice.order(2, 2, 6.59f, 10843));
		stockPrice.add(StockPrice.order(2, 1, 6.58f, 9997));
		stockPrice.add(StockPrice.order(1, 1, 6.57f, 6711 + z));
		stockPrice.add(StockPrice.order(1, 2, 6.56f, 13641));
		stockPrice.add(StockPrice.order(1, 3, 6.55f, 13641));
		stockPrice.add(StockPrice.order(1, 4, 6.54f, 13641));
		stockPrice.add(StockPrice.order(1, 5, 6.54f, 13641));
		
		stockPrice.add(StockPrice.currentType(1, "6.57"));
		stockPrice.add(StockPrice.currentType(2, "6.63"));
		stockPrice.add(StockPrice.currentType(3, "-0.08"));
		stockPrice.add(StockPrice.currentType(4, "6.70"));
		stockPrice.add(StockPrice.currentType(5, "-1.20%"));
		stockPrice.add(StockPrice.currentType(6, "6.57"));
		stockPrice.add(StockPrice.currentType(7, "173.1Íò"));
		stockPrice.add(StockPrice.currentType(8, (913851 + z) + ""));
		stockPrice.add(StockPrice.currentType(9, "816721"));
		
		//lasted
		stockPrice.add(StockPrice.lastedTime(50, 6.58f, 634 + z, 1));
		stockPrice.add(StockPrice.lastedTime(51, 6.57f, 56, 2));
		stockPrice.add(StockPrice.lastedTime(52, 6.57f, 2, 2));
		
		return SUCCESS;
	}

	public List<StockPrice> getStockPrice() {
		return stockPrice;
	}

	public void setStockPrice(List<StockPrice> stockPrice) {
		this.stockPrice = stockPrice;
	}
}
