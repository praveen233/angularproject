import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  public id: number;
  public name: string;
  public year: number;
  public rows: Array<{id: number, name: string, year: number}> = [];

  buttonClicked() {
    this.rows.push( {id: this.id, name: this.name, year: this.year } );

    //if you want to clear input
    this.id = null;
    this.name = null;
    this.year = null;
  }
  deleteRow(id){
    for(let i = 0; i < this.rows.length; i++){
        if (this.rows[i].id === id) {
            this.rows.splice(i,1);
        }
    }
}

}
