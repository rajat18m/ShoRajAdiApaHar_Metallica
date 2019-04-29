package ps.metallica.controllers;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ps.metallica.entities.Assets;
import ps.metallica.entities.Commodity;
import ps.metallica.entities.NewTrade;
import ps.metallica.entities.NominatedTrade;
import ps.metallica.entities.OpenTrade;
import ps.metallica.entities.Party;
import ps.metallica.repos.MetalsRepo;
import ps.metallica.repos.NominatedTradeRepo;
import ps.metallica.repos.OpenTradeRepo;
import ps.metallica.repos.PartyManagementRepo;

@Controller
@RestController
public class TradeServiceRest {
	
	@Autowired
	NominatedTradeRepo nominatedTradeRepo;
	
	@Autowired
	PartyManagementRepo partyManagementRepo;
	
	@Autowired
	MetalsRepo metalsRepo;
	
	@Autowired 
	OpenTradeRepo openTradeRepo;
	
	
	@RequestMapping(path="/viewAll",method=RequestMethod.GET)
	public List<NominatedTrade> viewAll(@RequestParam("userId") String userId)
	{
		return nominatedTradeRepo.viewAll(userId);
	}
	
	@RequestMapping(path="/createTransaction",method=RequestMethod.POST)
	@Transactional
	public ResponseEntity<Void> createOpenTrade(@RequestBody NewTrade newTrade)
	{
		ResponseEntity<Void> re;
		System.out.println(newTrade);
		Party party=partyManagementRepo.findPartyByuserID(newTrade.getUser_id());
		List<Assets> list=party.getAssets();
		int quantity=newTrade.getQuantity();
		Commodity metal=metalsRepo.findCommodityByCommodityName(newTrade.getMetalName());
		String metalIdentifier=metal.getcommodityIdentifier();
		boolean flag=false;
	    for(Assets asset:list)
	    {
	    	if(asset.getCommodityIdentifier().equals(metalIdentifier) && asset.getQuantity()>=quantity)
	    	{
	    		asset.setQuantity(asset.getQuantity()-quantity);
	    		OpenTrade openTrade=new OpenTrade(newTrade.getUser_id(),metal.getcommodityID(),party.getLocation().getLocationId(),newTrade.getPrice(),quantity);
	    		openTradeRepo.save(openTrade);
	    		flag=true;
	    		break;
	    	}
	    }
	    if(flag)
	    	re = new ResponseEntity<>(HttpStatus.CREATED);
	    else
	    	re = new ResponseEntity<>(HttpStatus.CONFLICT);
	    return re;
	}
	
	
	@RequestMapping(path="/buyTransaction",method=RequestMethod.POST)
	public ResponseEntity<Void> buyTrade(@RequestParam("Id") Integer id,@RequestParam("userId") Integer userId)
	{
		ResponseEntity<Void> re=null;
		OpenTrade openTrade=openTradeRepo.findOpenTradeBytradeID(id);
		NominatedTrade nominatedTrade=new NominatedTrade(openTrade.getTradeID(),openTrade.getSellerID(),userId,openTrade.getMetID(),openTrade.getLocationID(),new Date(),openTrade.getPrice(),openTrade.getQuantity());
		nominatedTradeRepo.save(nominatedTrade);
		openTradeRepo.deleteById(id);
		return re;
	}
	
	
	
	
	
	
	

}
