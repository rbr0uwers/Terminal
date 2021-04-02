import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  date : Date;
  place: Location = location;

  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
  }

}
