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
        SharedModule
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent, 
        ReactiveFlightSearchComponent,
        LookaheadComponent
    ],
    providers: [
        /* FlightService */
    ],
    exports: [
        FlightSearchComponent, 
        ReactiveFlightSearchComponent,
        LookaheadComponent
    ]
})
export class FlightBookingModule { }
