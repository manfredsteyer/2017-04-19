import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { LookaheadComponent } from './../lookahead/lookahead.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes, RouterModule } from '@angular/router';


const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            },
            {
                path: 'reactive-flight-search',
                component: ReactiveFlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            }
        ]

    },
    
    {
        path: 'lookahead',
        component: LookaheadComponent
    },

];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);