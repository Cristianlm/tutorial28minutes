import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Definimos un bean, y lo ponemos en 
export class helloWorldBean {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  // Crear un metodo para recuperar el data desde el backend service

  executeHelloWorldBeanService() {
    return this.http.get<helloWorldBean>('http://localhost:8090/hello-world-bean');

  }
  executeHelloWorldBeanServiceWithPathVariable(name) {

    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    // Hay que utilizar el back tick, y dentro puedes poner variables
    return this.http.get<helloWorldBean> (`http://localhost:8090/hello-world/path-variable/${name}`, 
    // {headers:header}
    );
    //   Access to XMLHttpRequest at 'http://localhost:8090/hello-world/path-variable/in28minutes'
    //  from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

    // La segunda vez: Access to XMLHttpRequest at 'http://localhost:8090/hello-world/path-variable/in28minutes'
    //  from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
  }
  // Crear un metodo para hacer los headers automaticamente
  // createBasicAuthHttpHeader() {
  //   let username = "user"
  //   let password = "password"
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;

  // }
}
