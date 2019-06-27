package com.in28minutes.rest.webservices.restfulwebservices.helloworld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


// la anotacion crossorigin, te permite conectar dos servidores ya que cada aplicacion está escuchando de un puerto distinto
@CrossOrigin(origins="http://localhost:4200")
//controller its handling http request
@RestController

public class HelloWorldController {

	//Get 
	// URi- /hello-world
	// Method to return "Hello world". 
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	// create a bean and return it back
	// hello-world-bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		
		//throw new RuntimeException("Some Error has Happened! Contact support ****.*** ");
		return new HelloWorldBean("Hello World-changed");
	}
	///hello-world/path-variable/in28minutes
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name ) {
		return new HelloWorldBean(String.format("Hello World,%s", name));
	}
}