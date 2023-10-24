import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  synchValue:string = ''
  numberAinput:string = ''
  operatorInput:string = ''
  numberBinput:string = ''

  takeNumberA(event:Event){
    this.numberAinput += event
  }

  takeOperator(event:string){
    this.operatorInput = event
  }


  takeNumberB(event:Event){
    this.numberBinput += event
  }

  takeValue(event:any){
    this.synchValue = event
  }
  resValue(event:any){
    this.synchValue = event
  }

  resCvalue(event:any){
      this.synchValue = event
    
  }

}
