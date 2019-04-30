package ps.metallica.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ps.metallica.entities.Commodity;
import ps.metallica.entities.Location;
import ps.metallica.entities.Party;
import ps.metallica.repos.CommodityRepo;
import ps.metallica.repos.LocationRepo;
import ps.metallica.repos.PartyRepo;


@RestController
public class MarketRestController {
	
	@Autowired
	CommodityRepo commodityRepo;
	
	@Autowired
	PartyRepo partyRepo;
	
	@Autowired
	LocationRepo locationRepo;
	
	@RequestMapping(path="/",method=RequestMethod.POST)
	public void putCommodity(@RequestBody Commodity commodity) {
		commodityRepo.save(commodity);

	}
	@RequestMapping(path="/",method=RequestMethod.GET)
	public Commodity getCommodityById(@RequestParam("id") Integer id) {
		return commodityRepo.findCommodityByCommodityID(id);
	}
	
	@RequestMapping(path="/com",method=RequestMethod.GET)
	public List<Commodity> getAllCommodity(){
		return commodityRepo.findAll();
	}
	
	@RequestMapping(path="/loc",method=RequestMethod.POST)
	public void putLocation(@RequestBody Location location) {
		locationRepo.save(location);

	}
	@RequestMapping(path="/loc",method=RequestMethod.GET)
	public List<Location> getLocation() {
		return locationRepo.findAll();
	}
	@RequestMapping(path="/par",method=RequestMethod.POST)
	public void putParty(@RequestBody Party party) {
		partyRepo.save(party);
	}
	
	@RequestMapping(path="/par", method=RequestMethod.GET)
	public List<Party> getParty(){
		return partyRepo.findAll();
	}

}
