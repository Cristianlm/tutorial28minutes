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


  executeJWTAuthenticationService(username, password) {

   

    // Hay que utilizar el back tick, y dentro puedes poner variables
    return this.http.post<any> (
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
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