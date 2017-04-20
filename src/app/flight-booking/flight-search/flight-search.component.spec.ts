import { FlightService } from './../flight.service';
import { Flight } from './../../entities/flight';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { FlightSearchComponent } from './flight-search.component';
import { BASE_URL } from '../../app.tokens';
import { HttpModule } from '@angular/http';
import { FlightBookingModule } from '../flight-booking.module';
import { TestBed, async } from '@angular/core/testing';

import 'rxjs/add/operator/map';



let dummyFlightService = {
  find(from: string, to: string): Observable<Flight[]> {
    console.debug('dummyFlightService wird aufgerufen!');
    return Observable.of([{id: 4711, from: 'Graz', to: 'Hamburg', date: ''}]);
  }
}

describe('FlightSearchComponent', async() => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        //FlightBookingModule,
        HttpModule,
        SharedModule,
        CommonModule,
        FormsModule   
      ],
      providers: [
        {provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
      ],
      declarations: [
        FlightSearchComponent
      ],
    }).compileComponents();


    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: dummyFlightService }
        ]
      }
    }).compileComponents();

  }));

  it('should not have a selected flight initially', async(() => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;
    expect(comp.selectedFlight).toBeUndefined();

  }));
   
  it('should not have any flight initially', async(() => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;
    expect(comp.flights.length).toBe(0);
  }));
  
  it('should load no flights without from and/or to', async(() => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;

    comp.to = '';
    comp.from = '';

    let ok: boolean = true;

    comp.search()           // try
      .then((flights) => { 
        ok = true;
      })
      .catch((err) => {     // catch
        ok = false;
        console.error('Fehler in Unit-Test', err);
      })
      .then(() => {         // finally
        expect(ok).toBeFalsy();
        //done();
      });


  }));


  it('should load flights with from and to', async(() => {
    const fixture = TestBed.createComponent(FlightSearchComponent);
    const comp = fixture.componentInstance;

    comp.from = 'Graz';
    comp.to = 'Hamburg';    

    let ok: boolean = true;

    comp.search()           // try
      .then((flights) => { 
        expect(flights.length).toBe(1);
        ok = true;
      })
      .catch((err) => {     // catch
        ok = false;
        console.error('Fehler in Unit-Test', err);
      })
      .then(() => {         // finally
        expect(ok).toBeTruthy();

        
      });


  }))




});
