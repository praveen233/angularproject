import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private http: HttpClient) { }
  total:number;
  allcar:any[]=[];
  ngOnInit() {
    this.http.get("http://cybotrix.com/ios/car.json").subscribe(
      response=>{
        this.allcar=response as string[];
      this.total=this.allcar.length
      }
    )
  }

}
