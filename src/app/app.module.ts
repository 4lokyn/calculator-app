import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalButtonsComponent } from './cal-buttons/cal-buttons.component';
import { CalResultsComponent } from './cal-results/cal-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CalButtonsComponent,
    CalResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
