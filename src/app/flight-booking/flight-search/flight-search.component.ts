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

    basket: any = {
        "3": true,
        "4": false,
        "5": true
    };

    constructor(private flightService: FlightService) { 
        console.debug('Manfred war hier.... You\'ve been haaaaacked!');
    }

    ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }

    search(): Promise<Flight[]> {

        if (!this.from || !this.to) {
            return Promise.reject('from and to expected');
        }

        return new Promise<Flight[]>((resolve: Function, reject: Function) => {
            this.flightService
                .find(this.from, this.to)
                .subscribe(
                    flights => {
                        this.flights = flights;
                        resolve(flights);
                    },
                    err => {
                        console.error('Fehler beim Laden', err);
                        reject(err);
                    }
                );

        });

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}