package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.Party;

public interface UserManagementRepo extends JpaRepository<Party,Integer>{
	
	public Party findPartyByEmail(String email);

}
