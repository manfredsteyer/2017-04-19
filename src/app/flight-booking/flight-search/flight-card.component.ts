import { Flight } from './../../entities/flight';

import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
        console.debug('ctor', this.item);
     }

    ngOnInit() {
        console.debug('ngOnInit', this.item);
        
        // Pfui Gaga!!!
        //this.selectedChange.next(true);
    }

    ngOnChanges(changes) {
        console.debug('ngOnChanges', this.item);
        if (changes.item) {
            console.debug('ngOnChanges item');
        }
        if (changes.selected) {
            console.debug('ngOnChanges selected');
        }

    }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
}