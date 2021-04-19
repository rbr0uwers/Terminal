import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { topBottomAnimation, blink } from '../animations';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [topBottomAnimation, blink]
})
export class TerminalComponent implements OnInit {
  date!: Date;
  place: Location = location;
  blinkState = 'active';

  constructor() {

  }

  ngOnInit(): void {
    fetch('https://api.github.com/repos/rbr0uwers/Terminal', {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }})
      .then(response => response.json())
      .then(data => {
        this.date = new Date(Date.parse(data.updated_at));
      });
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onDone($event: any): void {
    this.blinkState = this.blinkState === 'active' ? 'inactive' : 'active';
  }

}
