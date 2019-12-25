import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './../myservice.service';
@Component({
  selector: 'app-comforts',
  templateUrl: './comforts.component.html',
  styleUrls: ['./comforts.component.css']
})
export class ComfortsComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }
  todaydate;
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
