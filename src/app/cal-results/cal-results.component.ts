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
  
  numFlag = 0


  @Output() firstNum = new EventEmitter<string>()
  @Output() operator = new EventEmitter<string>()
  @Output() secondNum = new EventEmitter<string>()


  onKeyDown(event: KeyboardEvent){
    if(this.numberValue.includes(event.key)){
      if(this.numFlag == 0){
        this.firstNum.emit(event.key)
      } else {
        this.secondNum.emit(event.key)
      }
    } else if(this.operatorType.includes(event.key)){
      this.numFlag = 1
      this.operator.emit(event.key)
      
      
    }
  }
    
      



}


