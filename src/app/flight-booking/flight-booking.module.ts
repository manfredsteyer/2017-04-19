import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { LookaheadComponent } from './../lookahead/lookahead.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NgModule } from '@angular/core';
    
@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule, 
        CommonModule, 
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightBookingComponent,
        FlightEditComponent,
        PassengerSearchComponent,
        FlightSearchComponent, 
        FlightCardComponent, 
        ReactiveFlightSearchComponent,
        LookaheadComponent
    ],
    providers: [
        FlightService
    ],
    exports: [
    ]
})
export class FlightBookingModule { }
