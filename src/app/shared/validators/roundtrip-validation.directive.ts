import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({ 
    selector: 'form[roundTrip]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: RoundTripValidationDirective, multi: true }
    ]
})
export class RoundTripValidationDirective implements Validator {
    constructor() { }


    validate(c: AbstractControl): any {

        let group = c as FormGroup;

        let fromControl = group.controls['from'];
        let toControl = group.controls['to'];

        if (!fromControl || !toControl) return { };

        if (fromControl.value == toControl.value) {
            return { roundTrip: true };
        }

        return {};


    }

}