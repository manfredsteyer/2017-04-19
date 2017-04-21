import { CityValidator } from './../../shared/validators/city.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightService } from './../flight.service';
import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams, ResponseContentType } from "@angular/http";

@Component({
    selector: 'reactive-flight-search',
    templateUrl: './reactive-flight-search.component.html',
    styleUrls: ['./reactive-flight-search.component.css'],
    providers: [FlightService]
})
export class ReactiveFlightSearchComponent implements OnInit {
    
    filter: FormGroup;

    flights: Array<Flight> = [];
    selectedFlight: Flight;

    basket: any = {
        "3": true,
        "4": false,
        "5": true
    };

    constructor(
        private flightService: FlightService,
        private fb: FormBuilder) { 


            this.filter = fb.group({
                from: [
                    'Graz',
                    [
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(30),
                        Validators.pattern('[A-Za-z]+'),
                        CityValidator.validateCity,
                        CityValidator.validateCityWithParams(['Nürnberg', 'Graz', 'Hamburg', 'Berlin', 'Wien', 'Zürich'])
                    ],
                    [
                        CityValidator.validateAsyncCity
                    ]
                ],
                to: [
                    'Hamburg'
                ]
            });

            this.filter.validator = Validators.compose([CityValidator.validateRoundTrip]);

            this.filter
                .valueChanges
                .subscribe(changes => console.debug(changes));

            this.filter
                .controls['from']
                .valueChanges
                .subscribe(changes => console.debug(changes));

    }

    ngOnInit() { 
        console.debug('Komponente ist jetzt da!');
    }

    search(): Promise<Flight[]> {

        // this.filter.controls['from'].value;
        let value = this.filter.value;

        if (!value.from || !value.to) {
            return Promise.reject('from and to expected');
        }

        return new Promise<Flight[]>((resolve: Function, reject: Function) => {
            this.flightService
                .find(value.from, value.to)
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