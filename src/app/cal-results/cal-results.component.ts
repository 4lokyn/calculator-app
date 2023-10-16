import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cal-results',
  templateUrl: './cal-results.component.html',
  styleUrls: ['./cal-results.component.css']
})
export class CalResultsComponent {

  @Input() synch:string;
  
  forwardedValue:string = ''

}




