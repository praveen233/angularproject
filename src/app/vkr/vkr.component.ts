import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vkr',
  templateUrl: './vkr.component.html',
  styleUrls: ['./vkr.component.css']
})
export class VkrComponent implements OnInit {

  constructor(private http: HttpClient) { }
  allcar:any[];
  ngOnInit() {
    this.http.get("http://cybotrix.com/ios/car.json").subscribe(
      response=>{
        this.allcar=response as string[];
      }
    )

  }
  mycardetails:any[];
passtochild(index:number){
  this.mycardetails=this.allcar[index]
}
}
