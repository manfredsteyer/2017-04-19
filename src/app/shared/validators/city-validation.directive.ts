import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: 'input[city]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: CityValidationDirective, multi: true }
    ]
})
export class CityValidationDirective implements Validator {
    constructor() { }

    @Input() city: string;

    validate(c: AbstractControl): any {
        
        let allowed = this.city.split(',');

        if (allowed.indexOf(c.value) != -1) {
            return { };
        }

        return {
            city: {
                actual: c.value,
                reason: 47,
                possible: allowed
            }
        }

    }

}