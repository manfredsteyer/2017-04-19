import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-history',
    template: `
    
<div class="panel panel-default">

  <div class="panel-heading">Ihr Warenkorb</div>

  <ul class="list-group">
      
    <li class="list-group-item">
        Graz - Hamburg
    </li>
    <li class="list-group-item">
        Hamburg - Nürnberg
    </li>
    <li class="list-group-item">
        Hamburg - Mallorca
    </li>

  </ul>
</div>
    `
})

export class FlightHistoryComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}