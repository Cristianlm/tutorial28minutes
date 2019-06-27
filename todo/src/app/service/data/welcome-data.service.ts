import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Definimos un bean, y lo ponemos en 
export class helloWorldBean {
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  // Crear un metodo para recuperar el data desde el backend service

  executeHelloWorldBeanService(){
    return this.http.get<helloWorldBean>('http://localhost:8090/hello-world-bean'); 
    
  }
  executeHelloWorldBeanServiceWithPathVariable(name){
    // Hay que utilizar el back tick, y dentro puedes poner variables
    return this.http.get<helloWorldBean>(`http://localhost:8090/hello-world/path-variable/${name}`); 
    
  }
}
