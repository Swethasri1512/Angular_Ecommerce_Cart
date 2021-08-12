import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../database/alldata.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(public alldataService: AlldataService) { }

  ngOnInit(): void {}
}
