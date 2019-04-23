package ps.metallica.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
public class Commodity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer commodityID;
	
	@Column(unique=true)
	private String commodityIdentifier;
	
	@Column(unique=true)
	private String commodityName;
	
	private String commodityDescription;

	public Commodity() {
		super();
	}

	public Commodity(String commodityIdentifier, String commodityName, String commodityDescription) {
		super();
		this.commodityIdentifier = commodityIdentifier;
		this.commodityName = commodityName;
		this.commodityDescription = commodityDescription;
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

	public String getcommodityDescription() {
		return commodityDescription;
	}

	public void setcommodityDescription(String commodityDescription) {
		this.commodityDescription = commodityDescription;
	}
	
}
