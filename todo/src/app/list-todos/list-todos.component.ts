import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

//Future
// - No Navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components
// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message:string
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // {id : 1, description : },
  //   // {id : 2, description : ''},
  //   // {id : 3, description : 'Visit India'}
  // ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retriveAllTodos('in28minutes').subscribe(
      response=> {

        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo (id) {
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response=> {
        // si hay respuesta en un DELETE, se enseña un mensaje al usuatrio
        console.log(response);
        this.message= `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
        
      }
    )
  }
  updateTodo (id) {
    this.router.navigate(['todos', id])
    // this.todoService.updateTodo('in28minutes', id).subscribe(
    //   response=> {
    //     // si hay respuesta en un DELETE, se enseña un mensaje al usuatrio
    //     console.log(response);
    //     this.message= `Delete of Todo ${id} Successful!`;
    //     this.refreshTodos();
        
    //   }
    // )
  }

}
