import { AsyncCityValidationDirective } from './validators/async-city-validation.directive';
import { RoundTripValidationDirective } from './validators/roundtrip-validation.directive';
import { CityValidationDirective } from './validators/city-validation.directive';
import { CityPipe } from './pipes/city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe, CityValidationDirective, RoundTripValidationDirective, AsyncCityValidationDirective
    ],
    providers: [],
    exports: [
        CityPipe, CityValidationDirective, RoundTripValidationDirective, AsyncCityValidationDirective
    ]
    
})
export class SharedModule { }
