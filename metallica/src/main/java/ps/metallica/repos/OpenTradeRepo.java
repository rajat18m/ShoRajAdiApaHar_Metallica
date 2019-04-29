package ps.metallica.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ps.metallica.entities.OpenTrade;

public interface OpenTradeRepo extends JpaRepository<OpenTrade,Integer> {
	
	public OpenTrade findOpenTradeBytradeID(Integer id);
	
    @Query("from OpenTrade ot where ot.partyID<>:userID")
	public List<OpenTrade> fetchOpenTrades(@Param("userID") Integer userID);

}
