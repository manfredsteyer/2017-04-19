import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent, FlightSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
