import { Component, OnInit } from '@angular/core';

import { BasicAuthenticationService, AUTHENTICATED_USER } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn:boolean=false;
  constructor( private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn =this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
