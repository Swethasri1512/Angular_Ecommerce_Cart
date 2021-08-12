import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn:boolean=false;
  
  // stop user to go to login page manually
  constructor(private router:Router, private route: ActivatedRoute) {
    if(this.isUserLoggedIn==false) {
      this.router.navigate(['homepage'], { relativeTo: this.route });
    }
   }

  login(userName: string, password:string):Observable<any>{
    console.log(userName);
    console.log(password);
    // this.isUserLoggedIn = userName == "admin" && password == "admin";
    this.isUserLoggedIn = userName == userName && password == password;

    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn? "true":"false");
    console.log("from login 1 val of isulserloggedin " + this.isUserLoggedIn)
  return of(this.isUserLoggedIn).pipe(delay(1000),
  tap(val=>{
    console.log("is user authentication successful"+ val);
  })
  );
  }

  logout():void {
    this.isUserLoggedIn=false;
    localStorage.removeItem('isUserLoggedIn');
    window.location.reload()
  }
}
