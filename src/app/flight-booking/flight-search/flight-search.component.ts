import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
    
    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor(private http: Http) { 
    }

    ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }

    search(): void {

        let url = 'http://www.angular.at/api/flight';
        let headers = new Headers();
        headers.set('Accept', 'application/json');
        
        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);
 
        this
            .http
            .get(url, { search, headers })
            .map(resp => resp.json())
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