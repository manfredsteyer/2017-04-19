import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {
    transform(value: any, fmt: string): any {
        
        let long, short;

        switch(value) {
            case 'Graz':
                short = 'GRZ';
                long = 'Flughaften Graz Thalerhof';
                break;
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                break;
            case 'Nürnberg':
                short = 'NUE';
                long = 'Aiport Nürnberg Albrecht Dürer';
                break;
            default:
                short = long = 'ROM';
        }

        if (fmt == 'long') return long;
        return short;

    }
}