import { CityValidator } from './city.validator';
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: 'input[city]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: CityValidationDirective, multi: true }
    ]
})
export class CityValidationDirective implements Validator {
    constructor() { 
    }

    @Input() city: string;

    validate(c: AbstractControl): any {
        let allowed = this.city.split(',');
        let valiFn = CityValidator.validateCityWithParams(allowed);
        return valiFn(c);
    }

}