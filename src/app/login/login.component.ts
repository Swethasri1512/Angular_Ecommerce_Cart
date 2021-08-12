import { Component, OnInit } from '@angular/core';
import { AuthService } from '../database/auth.service';
import { Router } from '@angular/router';
import { AlldataService } from '../database/alldata.service';
import { windowToggle } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  alluserdata:any;
  loginloader=false;
  
  constructor(private authService: AuthService, private router: Router, public alldataService: AlldataService) { }
  
  ngOnInit(): void {}

  //login step 1
  onClickSubmit(){
    this.loginloader=true;
    if(this.username!="" || this.password!=""){
      this.fetchingUserData();
      setTimeout(() =>{this.checkingCredentials()},2000)
    }
    else{
      alert("please enter valid data")
    }
  }

  //login step 2
  fetchingUserData(){
    this.alldataService.getUserData().subscribe((data:any)=>{
      this.alluserdata = data.map((e:any)=>{
        return {
          Id: e.payload.doc.id,
          Fullname: e.payload.doc.data()['fullname'],
          Email: e.payload.doc.data()['email'],
          Password: e.payload.doc.data()['password'],
        }
      })
    })
  }

  //login step 3
  checkingCredentials(){
    let arr=this.alluserdata
    let loggedin_successfully_or_not:any=""

    for(let i=0; i<arr.length; i++){
  
      // used in this function only for verifying user.
      let loginid=arr[i].Email
      let loginpassword=arr[i].Password

      if((this.username==loginid) && (this.password==loginpassword) && ((this.username!="") || (this.password!="")) ){
        this.authService.login(loginid,loginpassword).subscribe((data:any)=>{
          window.location.reload()
          if(data) {this.router.navigate(['/'])}
        })
        // this will run if user enters correct data
        loggedin_successfully_or_not=true;
        break;
      }
      else{
        // this will show user not logged in notification after checking
        loggedin_successfully_or_not=false;
      }
    }

    // to show notification on the basis of assigned val to logged_in_suse...
    if(loggedin_successfully_or_not==true){
      //when logs in successfully
      this.loginloader=false
    }
    else{
      // when login falis
      alert("Username or password is incorrect")
      this.loginloader=false
    }
  }
}