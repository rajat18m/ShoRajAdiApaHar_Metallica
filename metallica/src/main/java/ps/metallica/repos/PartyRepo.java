package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.Party;

public interface PartyRepo extends JpaRepository<Party,Integer> {

}
