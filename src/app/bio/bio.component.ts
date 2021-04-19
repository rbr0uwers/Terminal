import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements AfterViewInit {
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;

  constructor() { }

  @HostListener('window:resize') onResize(event: Event): void{
    this.progressBars.forEach(bar => bar.nativeElement.innerHTML = this.createProgressBar(bar));
  }

  ngAfterViewInit(): void {
    this.progressBars.forEach(bar => bar.nativeElement.innerHTML = this.createProgressBar(bar));
  }

  createProgressBar(bar: ElementRef): string {
    // 1 Monospace Char has approx width of 8px at 1rem height - Needs to be recalculated when changing font or font-size
    // Minus "[]"
    const charsToFill = Math.floor(bar.nativeElement.clientWidth / 8) - 2;
    const barCharsLength = Math.floor(charsToFill * parseFloat(bar.nativeElement.dataset['pbValue']));
    const whiteSpaceCharLength = charsToFill - barCharsLength;

    return `[${'='.repeat(barCharsLength)}${'&nbsp;'.repeat(whiteSpaceCharLength)}]`;
  }

}
