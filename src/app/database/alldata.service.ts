import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AlldataService {

  // userdata variables to be used in any component

  constructor(private firestore:AngularFirestore) { }

  addUser(recore:any){
    return this.firestore.collection('signuptable').add(recore);
  }

  getMobiles(){
    return this.firestore.collection('mobilephones').snapshotChanges();
  }

  getCategoryData(){
    return this.firestore.collection('category').snapshotChanges();
  }

  getUserData(){
    return this.firestore.collection("signuptable").snapshotChanges();
  }
}
