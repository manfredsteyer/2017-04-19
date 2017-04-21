import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-booking',
    template: `

        <div class="col-sm-3">
            <ul class="nav nav-pills nav-stacked" style="margin-top:20px;">
                <li><a [routerLink]="['./flight-search']">Flight Search</a></li>
                <li><a [routerLink]="['./passenger-search']">Passenger Search</a></li>
                <li><a [routerLink]="['./reactive-flight-search']">Reactive Flight Search</a></li>
            </ul>
        </div>

        <div class="col-sm-9">
            <router-outlet></router-outlet>
        </div>
    `
})

export class FlightBookingComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}