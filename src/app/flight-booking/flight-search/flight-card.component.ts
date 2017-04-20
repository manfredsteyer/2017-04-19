import { Flight } from './../../entities/flight';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
}