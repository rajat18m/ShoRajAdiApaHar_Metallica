package ps.metallica.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import ps.metallica.entities.Location;

public interface LocationRepo extends JpaRepository<Location, Integer> {

	public Location findLoctionBylocationId(Integer id);
}
