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



}
