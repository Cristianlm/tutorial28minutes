import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
   
      let username = "user"
      let password = "password"
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      return basicAuthHeaderString;
  
    request = request.clone({
      setHeaders:{
        Aothorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}

