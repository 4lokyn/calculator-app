import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cal-results',
  templateUrl: './cal-results.component.html',
  styleUrls: ['./cal-results.component.css']
})
export class CalResultsComponent {

  @Input() synch:string;
  forwardedValue:string = ''
  onKeyDownGetData:any = ''
  // calculationLog:string = ''

  numValidation:RegExp = /\d/
  opsValidation:RegExp = /[-+*/=]/
  operatorType = ['+','-','*','/'];
  numberValue = ['0',"1","2","3","4","5","6","7","8","9"]

  firstNum:string;
  secondNum:string;
  operator:string;
  numFlag = 0
  result:{};
  getNumOps=[]
  @Output() sendInputData = new EventEmitter<[{na:string,op:string,nb:string}]>()

  onKeyDown(event: KeyboardEvent){
    
      

    } 
    
      



}


