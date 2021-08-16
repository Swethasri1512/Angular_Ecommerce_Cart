import { Component, OnInit } from '@angular/core';
import { AuthService } from '../database/auth.service';
import { AlldataService } from '../database/alldata.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent{

  cuserid:any;
  cuseremail:any;
  cuserfullname:any;
  cuserphone:any;
  cuserstate:any;
  cusercountry:any;
  cuseraddress:any;

  editaddress:boolean=true;

  alluserData:any;

  constructor(private alldataService: AlldataService){

    this.cuserid = localStorage.getItem("userid");

    this.alldataService.getUserData().subscribe((data:any)=>{
      this.alluserData = data.map((e:any)=>{
        return {
          Id : e.payload.doc.id,
          Email : e.payload.doc.data()['email'],
          Fullname : e.payload.doc.data()['fullname'],
          Phone : e.payload.doc.data()['phone'],
          State : e.payload.doc.data()['state'],
          Country : e.payload.doc.data()['country'],
          Address : e.payload.doc.data()['address'],
        }
      })
      let arr:any=this.alluserData
      for(let i=0; i<(arr.length); i++){
        if(arr[i].Id==this.cuserid){
          this.cuserid = arr[i].Id
          this.cuseremail = arr[i].Email
          this.cuserfullname = arr[i].Fullname
          this.cuserphone = arr[i].Phone
          this.cuserstate = arr[i].State
          this.cusercountry = arr[i].Country
          this.cuseraddress = arr[i].Address
        }
      }
    })
  }

  ngOnInit(){
    if(this.cuseraddress=="" || this.cuseraddress=="undefined"){
      this.editaddress=false;
      console.log('this is from ngonit in myacc')
    }
  }

}