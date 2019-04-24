package ps.metallica.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ps.metallica.entities.NominatedTrade;

public interface NominatedTradeRepo extends JpaRepository<NominatedTrade,Integer>{
	
	@Query("from NominatedTrade t where t.partyID=:userID or t.counterpartyID=:userID")
	public List<NominatedTrade> viewAll(@Param("userID") String userID);

}
