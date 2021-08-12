import { Component, OnInit } from '@angular/core';
import { AuthService } from '../database/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{


  isUserLoggedIn:boolean = false;

  constructor(){}


  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
       this.isUserLoggedIn = true;
    else
       this.isUserLoggedIn = false;
  }

}
