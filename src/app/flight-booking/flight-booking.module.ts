import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule, CommonModule, SharedModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    providers: [
        /* FlightService */
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
