package ps.metallica.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.OpenTrade;

public interface OpenTradeRepo extends JpaRepository<OpenTrade,Integer>{
	
	public List<OpenTrade> findOpenTradeByPartyIDNot(String partyId);

}
