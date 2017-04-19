import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
    
    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor() { }

    ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }

    search(): void {

        this.flights.push({
            id: 4711,
            from: 'Graz',
            to: 'Nürnberg',
            date: '2017-04-18T18:00:00+02:00'
        });      


        this.flights.push({
            id: 4712,
            from: 'Nürnberg',
            to: 'Graz',
            date: '2017-04-21T18:00:00+02:00'
        });      


        this.flights.push({
            id: 4713,
            from: 'Nürnberg',
            to: 'Mallorca',
            date: '2017-04-19T18:00:00+02:00'
        });      

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}