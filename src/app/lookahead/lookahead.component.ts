import { Flight } from './../entities/flight';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// Option 1: Alles einbinden
import 'rxjs';

// Option 2: Operatoren einzeln einbinden
/*
import "rxjs/add/observable/debounceTime";
import "rxjs/add/operator/do";
...
*/

@Component({
    selector: 'lookahead',
    templateUrl: './lookahead.component.html'
})

export class LookaheadComponent implements OnInit {
    constructor(private http: Http) { }

    control: FormControl;
    flights$: Observable<Flight[]>;
    loading: boolean = false;

    ngOnInit() { 
        this.control = new FormControl();

        this.flights$ = this
                            .control
                            .valueChanges
                            .debounceTime(300)
                            .do(v => this.loading = true)
                            .switchMap(name => this.load(name))
                            .do(v => this.loading = false);
    }

    load(from: string)  {
        let url = "http://www.angular.at/api/flight";
        
        let search = new URLSearchParams();
        search.set('from', from);
        
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, {search, headers})
                .map(resp => resp.json());
    };

    
}