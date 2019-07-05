package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// Lo primero que hay que hacer es crear una interface extendiendo el JpaRepository 7y hay que indicarle la entidad y su primary key

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{

	
	List<Todo>findByUsername(String username);
}
