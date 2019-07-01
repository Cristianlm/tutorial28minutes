import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService 
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = "user"
    // let password = "password"
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let basicAuthHeaderString= this.basicAuthenticationService.getAuthenticaticatedtoken();
    let username= this.basicAuthenticationService.getAuthenticaticatedUser();

    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
  }
    return next.handle(request);
  }
}

