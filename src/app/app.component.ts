import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  synchValue:string = ''



  takeValue(event:any){
    this.synchValue = event
  }
  resValue(event:any){
    // this.synchValue = event
    this.synchValue = event
}

  resCvalue(event:any){
      this.synchValue = event
      // this.catchEqual = true
    
  }

}
