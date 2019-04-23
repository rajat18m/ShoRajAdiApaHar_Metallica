package ps.metallica.session;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ps.metallica.entities.Party;

@Controller
public class UserSessionController {

	/**
	 * Function for User Authentication
	 * 
	 * @author shodutt
	 * @param model
	 * @param session
	 * @return
	 */
	@GetMapping("/api/user")
	public String userAuth(Model model, HttpSession session) {
		Party party = (Party) session.getAttribute("PARTY");
		if(party == null) {
			return "failed";
		}
		model.addAttribute("currentParty", party);
		return "login";
	}
	
}
