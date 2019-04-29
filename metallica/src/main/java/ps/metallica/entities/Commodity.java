package ps.metallica.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Commodity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer commodityID;
	
	@Column(unique=true)
	private String commodityIdentifier;
	
	@Column(unique=true)
	private String commodityName;
	

	public Commodity() {
		super();
	}

	public Commodity(String commodityIdentifier, String commodityName) {
		super();
		this.commodityIdentifier = commodityIdentifier;
		this.commodityName = commodityName;
	
	}

	public Integer getcommodityID() {
		return commodityID;
	}

	public void setcommodityID(Integer commodityID) {
		this.commodityID = commodityID;
	}

	public String getcommodityIdentifier() {
		return commodityIdentifier;
	}

	public void setcommodityIdentifier(String commodityIdentifier) {
		this.commodityIdentifier = commodityIdentifier;
	}

	public String getcommodityName() {
		return commodityName;
	}

	public void setcommodityName(String commodityName) {
		this.commodityName = commodityName;
	}


	
}
