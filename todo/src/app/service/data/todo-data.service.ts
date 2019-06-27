import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

 // Crear un metodo para recuperar el data desde el backend service

 retriveAllTodos(username){
   // obtenemos un array of todos 
  return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`); 
  
}
// Creamos un metodo para borrar un dato de un usuario específico
retrieveTodo(username,id){
  return this.http.get<Todo>(`http://localhost:8090/users/${username}/todos/${id}`)
}

deleteTodo(username,id){
  return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`)
}

updateTodo(username,id,todo){
  return this.http.put(`http://localhost:8090/users/${username}/todos/${id}`
  ,todo)
}
createTodo(username,todo){
  return this.http.post(`http://localhost:8090/users/${username}/todos/`
  ,todo)
}

}
