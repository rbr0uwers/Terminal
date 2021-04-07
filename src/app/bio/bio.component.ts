import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  host: {'(window:resize)': 'onResize($event)'}
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
    // 1 Monospace Char has approx width of 8px at 1rem height - Needs to be recalculated when changing font or font-size
    // Minus "[]"
    let charsToFill = Math.floor(bar.nativeElement.clientWidth / 8) - 2; 
    let barCharsLength = Math.floor(charsToFill * parseFloat(bar.nativeElement.dataset["pbValue"]));
    let whiteSpaceCharLength = charsToFill - barCharsLength;

    return `[${"=".repeat(barCharsLength)}${"&nbsp;".repeat(whiteSpaceCharLength)}]`;;
  }

}
