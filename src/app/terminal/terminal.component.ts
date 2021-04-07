import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { topBottomAnimation, blink } from "../animations";

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [topBottomAnimation, blink]
})
export class TerminalComponent implements OnInit {
  date : Date;
  place: Location = location;
  blinkState: string = "active";

  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onDone($event: any) {
    this.blinkState = this.blinkState === 'active' ? 'inactive' : 'active';
  }

}
