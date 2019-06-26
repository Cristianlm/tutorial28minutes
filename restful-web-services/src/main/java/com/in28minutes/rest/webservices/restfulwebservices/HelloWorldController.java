package com.in28minutes.rest.webservices.restfulwebservices;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//controller its handling http rquest
@RestController

public class HelloWorldController {

	//Get 
	// URi- /hello-world
	// Method to return "Hello world". 
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
}
