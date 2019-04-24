package ps.metallica.session;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	@GetMapping("/")
	public String userLogin(Model model, HttpSession session) {
		Party party = (Party) session.getAttribute("PARTY");
		if(party == null) {
			return "redirect:/login";
		}
		model.addAttribute("currentParty", party);
		return "redirect:/dashboard";
	}
	
	@GetMapping("/api/*")
	public String userSession(Model model, HttpSession session, HttpServletRequest request) {
		Party party = (Party) session.getAttribute("PARTY");
		if(party == null) {
			return "redirect:/login";
		}
		model.addAttribute("currentParty", party);
		return request.getRequestURI().toString();
	}
	
	@PostMapping("/api/user")
	public String userRegistration(@RequestParam("email") String email, @RequestParam("password") String password,
			@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, HttpServletRequest request) {
		Party party = (Party) request.getSession().getAttribute("PARTY");
		if(party == null) {
			party = new Party(password, firstName, lastName, email);
		}
		request.getSession().setAttribute("PARTY", party);
		return "redirect:/";
	}
	
	@PostMapping("/destroy")
	public String destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
		return "redirect:/";
	}
	
}
