import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  @Input("carData") carinfo:any[];
  ngOnInit() {
  }

}
