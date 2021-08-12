import { Component } from '@angular/core';
import { AlldataService } from '../database/alldata.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {


  loader=false;
  allfetchedmobiles:any;

  constructor(private alldataService: AlldataService) {
    this.fetchPhoneData()
  }

  fetchPhoneData(){
    this.loader=true
    this.alldataService.getMobiles().subscribe((data:any)=>{
      this.allfetchedmobiles = data.map((e:any)=>{
        return {
          id:e.payload.doc.data()['mid'],
          name:e.payload.doc.data()['mname'],
          imageurl:e.payload.doc.data()['mimageurl'],
          price:e.payload.doc.data()['mprice'],
        }
      })
      this.loader=false
    })
  }

}
