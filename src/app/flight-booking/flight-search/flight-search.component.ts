import { FlightService } from './../flight.service';
import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams, ResponseContentType } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
    
    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor(private flightService: FlightService) { 
        console.debug('Manfred war hier.... You\'ve been haaaaacked!');
    }

    ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }

    search(): void {

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                flights => {
                    this.flights = flights;
                },
                err => {
                    console.error('Fehler beim Laden', err);
                }
            )
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}