import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html', 
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dateToday: string="";

  name: string="";

  isvalid:boolean=true;
  changevalue(valid:any){
    this.isvalid=valid;
  }
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();

    this.name = "Simplilearn"

  }

}
