package ps.metallica.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Party implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer userID;
	
	private String password;
	private String firstName;
	private String lastName;
	
	@OneToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	private Location location;
	
	@Column(name="USER_EMAIL", unique=true)
	private String email;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Assets> assets;
	
	
	public Party() {
		super();
	}
	


	public Party(Integer userID, String password, String firstName, String lastName, Location location, String email,
			List<Assets> assets) {
		super();
		this.userID = userID;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.location = location;
		this.email = email;
		this.assets = assets;
	}



	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Assets> getAssets() {
		return assets;
	}

	public Location getLocation() {
		return location;
	}



	public void setLocation(Location location) {
		this.location = location;
	}



	public void setAssets(List<Assets> assets) {
		this.assets = assets;
	}

	
	
}
