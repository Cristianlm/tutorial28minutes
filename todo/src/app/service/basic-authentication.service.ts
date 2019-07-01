import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN ='token';
export const AUTHENTICATED_USER= 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  executeBasicAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthHeaderString);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    // Hay que utilizar el back tick, y dentro puedes poner variables
    return this.http.get<AuthenticationBean> (
      `${API_URL}/basicauth`,
      { headers: header}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //   Access to XMLHttpRequest at 'http://localhost:8090/hello-world/path-variable/in28minutes'
    //  from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

    // La segunda vez: Access to XMLHttpRequest at 'http://localhost:8090/hello-world/path-variable/in28minutes'
    //  from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
  }

  getAuthenticaticatedUser() {
    // comprobar si el usuario está authentifciado
    return sessionStorage.getItem(AUTHENTICATED_USER)
    

  }
  getAuthenticaticatedtoken() {
    // comprobar si el usuario está authentifciado
    if(this.getAuthenticaticatedUser())
    return sessionStorage.getItem(TOKEN)
    

  }
  isUserLoggedIn() {
    // comprobar si el usuario está authentifciado
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)

  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor( public message: string) { }
}