package ps.metallica.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name="findAllTradesByUser", query="from NominatedTrade t where t.sellerID=:userID or t.buyerID=:userID")
})
public class NominatedTrade {

	private Integer tradeID;
	
	private Integer partyID;
	
	/*
	 * if(partyID == userID) {
	 *    SELL
	 * }
	 * else BUY
	 */
	
	private Integer counterpartyID;
	
	private Integer commodityID;
	
	private Integer locationID;
	
	private Date date;
	
	private Double price;
	
	private Integer quantity;
	
	private String tradeDescription;

	public NominatedTrade() {
		super();
	}

	/* Including ID because this is how we will create an entry in this table using
	 * the Trade and Transaction classes. It will look something like this:
	 *    Trade t = fetchTrade(); // We fetch a trade on transaction.
	 *    Transaction tx = new Transaction(...); // Create transaction using constructor
	 *    // Create NominatedTrade using properties of the Trade and Transaction
	 *    NominatedTrade nomTrade = new NominatedTrade(t.getTradeID(), ..., tx.getDate(), ...);
	 */
	public NominatedTrade(Integer tradeID, Integer sellerID, Integer buyerID, Integer metID, Integer locationID,
			Date date, Double price, Integer quantity, String tradeDescription) {
		super();
		this.tradeID = tradeID;
		this.partyID = sellerID;
		this.counterpartyID = buyerID;
		this.commodityID = metID;
		this.locationID = locationID;
		this.date = date;
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
		return partyID;
	}

	public void setSellerID(Integer sellerID) {
		this.partyID = sellerID;
	}

	public Integer getBuyerID() {
		return counterpartyID;
	}

	public void setBuyerID(Integer buyerID) {
		this.counterpartyID = buyerID;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
