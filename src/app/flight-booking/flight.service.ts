import { BASE_URL } from './../app.tokens';
import { Flight } from './../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FlightService {

    flights: Flight[] = [];

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string) { 
        console.debug('Manfred war hier.... You\'ve been haaaaacked!');
    }

    find(from: string, to: string): void {
        
        let url = this.baseUrl + 'flight';
        
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = { from, to };

        this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json())
                .subscribe(
                    (flights) => {
                        this.flights = flights;
                    },
                    (err) => {
                        console.error('Fehler beim Laden', err);
                    }
                );

    }

}