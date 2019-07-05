import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

 // Crear un metodo para recuperar el data desde el backend service

 retriveAllTodos(username){
   // obtenemos un array of todos 
  return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`); 
  
}
// Creamos un metodo para borrar un dato de un usuario específico
retrieveTodo(username,id){
  return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
}

deleteTodo(username,id){
  return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
}

updateTodo(username,id,todo){
  return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`
  ,todo)
}
createTodo(username,todo){
  return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos/`
  ,todo)
}

}
