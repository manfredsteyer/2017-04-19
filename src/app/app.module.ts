import { BASE_URL } from './app.tokens';
import { FlightService } from './flight-booking/flight.service';
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
  providers: [
    //FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
