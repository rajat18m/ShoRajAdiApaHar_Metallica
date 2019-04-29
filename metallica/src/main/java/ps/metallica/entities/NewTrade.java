package ps.metallica.entities;

public class NewTrade{
	
	private String metalName;
	private double price;
	private int quantity;
	private int user_id;
	
	
	public NewTrade() {
		super();
	}
	
	public NewTrade(String metalName, double price, int quantity, int user_id) {
		super();
		this.metalName = metalName;
		this.price = price;
		this.quantity = quantity;
		this.user_id = user_id;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public int getUser_id() {
		return user_id;
	}
	
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	public String getMetalName() {
		return metalName;
	}
	
	public void setMetalName(String metalName) {
		this.metalName = metalName;
	}
	public double getPrice() {
		return price;
	}

	@Override
	public String toString() {
		return "NewTrade [metalName=" + metalName + ", price=" + price + ", quantity=" + quantity + ", user_id="
				+ user_id + "]";
	}
	
	

}
