package ps.metallica.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OpenTrade {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer tradeID;
	
	
	private Integer partyID;
	
	private Integer commodityID;
	
	private Integer locationID;
	
	private Double price;
	
	private Integer quantity;
	
	public OpenTrade() {
		super();
	}

	public OpenTrade(Integer sellerID, Integer metID, Integer locationID, Double price, Integer quantity
			) {
		super();
		this.partyID = sellerID;
		this.commodityID = metID;
		this.locationID = locationID;
		this.price = price;
		this.quantity = quantity;
	}

	public Integer getTradeID() {
		return tradeID;
	}

	public void setTradeID(Integer tradeID) {
		this.tradeID = tradeID;
	}

	public Integer getSellerID() {
		return partyID;
	}

	public void setSellerID(Integer sellerID) {
		this.partyID = sellerID;
	}

	public Integer getMetID() {
		return commodityID;
	}

	public void setMetID(Integer metID) {
		this.commodityID = metID;
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



}
