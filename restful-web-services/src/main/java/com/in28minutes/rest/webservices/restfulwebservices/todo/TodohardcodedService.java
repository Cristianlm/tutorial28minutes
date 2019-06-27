package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TodohardcodedService {

	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter=0;
	static {
		
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance ", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn about to Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn about angular ", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	public Todo deleteById(long id){
		Todo todo= findById(id);
		if(todo==null) return null;
		if(todos.remove(todo)) {
		return todo;
		}else {
		return null;
		}
	}
	private Todo findById(long id) {
		
		for (Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
}