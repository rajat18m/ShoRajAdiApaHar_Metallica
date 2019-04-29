package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.Commodity;

public interface MetalsRepo extends JpaRepository<Commodity,Integer> {
	
	public Commodity findCommodityByCommodityName(String name);

}
