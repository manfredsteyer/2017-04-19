import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: 'input[asyncCity]',
    providers: [
        { provide: NG_ASYNC_VALIDATORS, useExisting: AsyncCityValidationDirective, multi: true }
    ]
})
export class AsyncCityValidationDirective implements Validator {
    constructor() { }

    validate(c: AbstractControl): Promise<any> {
        return new Promise<any>((resolve: Function, reject: Function) => { 
            setTimeout(() => { 
               resolve({ asyncCity: true }); 
            }, 4000);
        })

    }
}