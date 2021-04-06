import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BioComponent implements AfterViewInit {

  constructor() { }

  onResize(event: Event) {
    this.progressBars.forEach(bar => bar.nativeElement.innerHTML = this.createProgressBar(bar));
  }

  ngAfterViewInit(): void {
    this.progressBars.forEach(bar => bar.nativeElement.innerHTML = this.createProgressBar(bar));
  }

  @ViewChildren("progressBar") progressBars!: QueryList<ElementRef>;

  createProgressBar(bar: ElementRef) : string {
    let charsToFill = Math.floor(bar.nativeElement.clientWidth / 8) - 2; //Minus "[]"
    let barCharsLength = Math.floor(charsToFill * parseFloat(bar.nativeElement.dataset["pbValue"]));
    let whiteSpaceCharLength = charsToFill - barCharsLength;

    return `[${"=".repeat(barCharsLength)}${"&nbsp;".repeat(whiteSpaceCharLength)}]`;;
  }

}
