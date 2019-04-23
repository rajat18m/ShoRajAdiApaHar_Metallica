package ps.metallica.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name="findAllTradesNotByUser", query="from Trade t where t.sellerID!=:userID")
})
public class Trade {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer tradeID;
	
	private Integer sellerID;
	
	private Integer metID;
	
	private Integer locationID;
	
	private Double price;
	
	private Integer quantity;
	
	private String tradeDescription;

	public Trade() {
		super();
	}

	public Trade(Integer sellerID, Integer metID, Integer locationID, Double price, Integer quantity,
			String tradeDescription) {
		super();
		this.sellerID = sellerID;
		this.metID = metID;
		this.locationID = locationID;
		this.price = price;
		this.quantity = quantity;
		this.tradeDescription = tradeDescription;
	}

	public Integer getTradeID() {
		return tradeID;
	}

	public void setTradeID(Integer tradeID) {
		this.tradeID = tradeID;
	}

	public Integer getSellerID() {
		return sellerID;
	}

	public void setSellerID(Integer sellerID) {
		this.sellerID = sellerID;
	}

	public Integer getMetID() {
		return metID;
	}

	public void setMetID(Integer metID) {
		this.metID = metID;
	}

	public Integer getLocationID() {
		return locationID;
	}

	public void setLocationID(Integer locationID) {
		this.locationID = locationID;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getTradeDescription() {
		return tradeDescription;
	}

	public void setTradeDescription(String tradeDescription) {
		this.tradeDescription = tradeDescription;
	}

}