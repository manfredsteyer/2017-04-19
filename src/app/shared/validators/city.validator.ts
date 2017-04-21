import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';


export class CityValidator {


    static validateCity(c: AbstractControl): any {

        if (c.value == 'Graz' || c.value == 'Hamburg' || c.value == 'Nürnberg') {
            return {}
        }

        return {
            city: true
        }
    }

    static validateCityWithParams(allowed: string[]): ValidatorFn {
        return (c: AbstractControl): any => {

            if (allowed.indexOf(c.value) > -1) {
                return {};
            }
            return {
                city: true
            }

        }
    }


    static validateAsyncCity(c: AbstractControl): any {

        return new Promise<any>((resolve: Function) => {

            setTimeout(() => {
                resolve({asyncCity: true});
            }, 4000)
        })
    }

    static validateRoundTrip(c: AbstractControl): any {

        let formGroup = c as FormGroup;

        let fromCtrl = formGroup.controls['from'];
        let toCtrl = formGroup.controls['to'];

        if (!fromCtrl || !toCtrl) return {};

        if (fromCtrl.value == toCtrl.value) {
            return {roundTrip: true};
        }

        return {};

    }

}