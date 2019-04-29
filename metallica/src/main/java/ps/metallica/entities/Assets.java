package ps.metallica.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Assets implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int assetId;
	
	private String commodityIdentifier;
	private Integer quantity;
	public Assets() {
		super();
	}
	public Assets(int assetId, String commodityIdentifier, Integer quantity) {
		super();
		this.assetId = assetId;
		this.commodityIdentifier = commodityIdentifier;
		this.quantity = quantity;
	}
	public int getAssetId() {
		return assetId;
	}
	
	public String getCommodityIdentifier() {
		return commodityIdentifier;
	}
	public void setCommodityIdentifier(String commodityIdentifier) {
		this.commodityIdentifier = commodityIdentifier;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
	
	

}
