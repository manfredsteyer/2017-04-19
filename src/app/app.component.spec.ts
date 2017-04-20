import { BASE_URL } from './app.tokens';
import { HttpModule } from '@angular/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpModule
      ],
      providers: [
        {provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe('Hallo Welt!');
  }));


  
});
