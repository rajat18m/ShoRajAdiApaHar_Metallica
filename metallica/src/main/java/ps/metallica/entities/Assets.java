package ps.metallica.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Assets {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int assetId;
	
	private Integer commodityId;
	private Integer quantity;
	public Assets() {
		super();
	}
	public Assets(Integer commodityId, Integer quantity) {
		super();
		this.commodityId = commodityId;
		this.quantity = quantity;
	}
	
	
	public Integer getCommodityId() {
		return commodityId;
	}
	public void setCommodityId(Integer commodityId) {
		this.commodityId = commodityId;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
	

}
