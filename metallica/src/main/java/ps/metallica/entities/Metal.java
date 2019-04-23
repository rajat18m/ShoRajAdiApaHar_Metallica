package ps.metallica.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name="findAllMetals", query="from Metal m")
})
public class Metal {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer metID;
	
	@Column(unique=true)
	private String metIdentifier;
	
	@Column(unique=true)
	private String metName;
	
	private String metDescription;

	public Metal() {
		super();
	}

	public Metal(String metIdentifier, String metName, String metDescription) {
		super();
		this.metIdentifier = metIdentifier;
		this.metName = metName;
		this.metDescription = metDescription;
	}

	public Integer getMetID() {
		return metID;
	}

	public void setMetID(Integer metID) {
		this.metID = metID;
	}

	public String getMetIdentifier() {
		return metIdentifier;
	}

	public void setMetIdentifier(String metIdentifier) {
		this.metIdentifier = metIdentifier;
	}

	public String getMetName() {
		return metName;
	}

	public void setMetName(String metName) {
		this.metName = metName;
	}

	public String getMetDescription() {
		return metDescription;
	}

	public void setMetDescription(String metDescription) {
		this.metDescription = metDescription;
	}
	
}
