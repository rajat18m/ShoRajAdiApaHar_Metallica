package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.OpenTrade;

public interface OpenTradeRepo extends JpaRepository<OpenTrade,Integer> {
	
	public OpenTrade findOpenTradeBytradeID(Integer id);

}
