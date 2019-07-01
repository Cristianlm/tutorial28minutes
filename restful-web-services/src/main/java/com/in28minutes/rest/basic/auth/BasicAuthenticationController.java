package com.in28minutes.rest.basic.auth;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


// la anotacion crossorigin, te permite conectar dos servidores ya que cada aplicacion está escuchando de un puerto distinto
@CrossOrigin(origins="http://localhost:4200")
//controller its handling http request
@RestController

public class BasicAuthenticationController {

	
	// create a bean and return it back
	// hello-world-bean
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean() {
		
		//throw new RuntimeException("Some Error has Happened! Contact support ****.*** ");
		return new AuthenticationBean("you are authenticated");
	}

}