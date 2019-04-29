package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.Commodity;

public interface CommodityRepo extends JpaRepository<Commodity, Integer> {
	
	public Commodity findCommodityByCommodityID(Integer id);
}
