import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  dateToday: string="";

  name: string="";

  constructor() { }

  ngOnInit(): void {
    this.dateToday ="kjhgkkj"

    this.name = "Simplilearn"


  }

}
