package ps.metallica.entities;

import java.util.Date;

public class Transaction {
	
	private Integer sellerID;
	private Integer buyerID;
	private Date date;
	
	public Transaction() {
		super();
	}

	public Transaction(Integer sellerID, Integer buyerID, Date date) {
		super();
		this.sellerID = sellerID;
		this.buyerID = buyerID;
		this.date = date;
	}

	public Integer getSellerID() {
		return sellerID;
	}

	public void setSellerID(Integer sellerID) {
		this.sellerID = sellerID;
	}

	public Integer getBuyerID() {
		return buyerID;
	}

	public void setBuyerID(Integer buyerID) {
		this.buyerID = buyerID;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
