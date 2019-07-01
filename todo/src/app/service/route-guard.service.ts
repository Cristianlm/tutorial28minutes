import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private basicAuthenticationService: BasicAuthenticationService,
    private router: Router) { }
  canActivate(route: ActivatedRoute, state: RouterStateSnapshot) {
    if (this.basicAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      // Route the user to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
