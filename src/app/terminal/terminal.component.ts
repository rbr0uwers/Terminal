import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { slideInAnimation } from "../animations";

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [slideInAnimation]
})
export class TerminalComponent implements OnInit {
  date : Date;
  place: Location = location;

  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
