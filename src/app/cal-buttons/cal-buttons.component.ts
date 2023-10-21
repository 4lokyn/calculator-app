import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cal-buttons',
  templateUrl: './cal-buttons.component.html',
  styleUrls: ['./cal-buttons.component.css']
})
export class CalButtonsComponent {

  numberA:any = '';
  numberB:any = '';
  operator:any = '';
  flag:number = 0;
  equalFlag:number = 0;

    @Output() numA = new EventEmitter<string>();
    @Output() ops = new EventEmitter<string>();
    @Output() numB = new EventEmitter<string>();
    @Output() res = new EventEmitter<string>();
    @Output() resC = new EventEmitter<string>();

  operatorTop = [
  {"operator":'C',"reference":'C','id':'btnReset'},
  {"operator":'√',"reference":'√', 'id':''},
  {"operator":'÷',"reference":'/','id':''},
  {"operator":'x',"reference":'*','id':''}
  ]
  operatorsRight = [
    {"operator":'-',"reference":'-', 'id':''},
    {"operator":'+',"reference":'+','id':''},
    {"operator":'=',"reference":'=','id':'btnEqual'}
  ]
  numbers = [
    {"number": 7,"reference": '7','id':''},
    {"number": 8,"reference": '8','id':''},
    {"number": 9,"reference": '9', 'id':''},
    {"number": 4,"reference": '4','id':''},
    {"number": 5,"reference": '5','id':''},
    {"number": 6,"reference": '6','id':''},
    {"number": 1,"reference": '1', 'id':''},
    {"number": 2,"reference": '2','id':''},
    {"number": 3,"reference": '3','id':''},
    {"number":'Log',"reference":'logBtn','id':'logBtn'},
    {"number": 0,"reference": '0','id':''},
    {"number": '.',"reference":'.','id':''}
  ]
  

    onClick(value:any){
      
        
      if(this.numbers.some(elem=> elem.number==value) || value == '='){
            if(this.flag == 0 && value !=='='){
              this.numberA += value
              console.log('Broj A '+this.numberA);
              this.numA.emit(this.numberA)

            } else{
              if(value !== '='){
              this.numberB += value
              console.log('Broj B '+this.numberB);
              this.numB.emit(this.numberB)
             } else {
                if(this.operator == '√'){
                  this.operator = '='
                  this.math()
                } else {
                  this.math();
                  this.operator = '='
                  this.math()
                }
             }

            }

      } else {
            if(value == '√' || value == 'C'){
              this.operator = value
              this.math()
            } else {
              this.flag = 1
              this.operator = value
              this.ops.emit(this.operator)
            }
          }
      } 

      math(){
        switch(this.operator){
          case '+': this.numberA = parseFloat(this.numberA)+parseFloat(this.numberB);this.flag=1;break;
          case '-': this.numberA = parseFloat(this.numberA)-parseFloat(this.numberB);this.flag=1;break;
          case '*': this.numberA = parseFloat(this.numberA)*parseFloat(this.numberB);this.flag=1;break;
          case '/': this.numberA = parseFloat(this.numberA)/parseFloat(this.numberB);this.flag=1;break;
          case '√': this.numberA = Math.sqrt(this.numberA);this.flag=1;break;
          case 'C':
                    this.flag=0;
                    this.numberA = ''
                    this.numberB = ''
                    this.resC.emit(this.numberA)
                    break; 
          case '=':this.res.emit(this.numberA);break;
        }
       this.numberB = ''
      }
  }
