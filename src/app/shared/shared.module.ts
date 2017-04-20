import { CityValidationDirective } from './validators/city-validation.directive';
import { CityPipe } from './pipes/city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe, CityValidationDirective
    ],
    providers: [],
    exports: [
        CityPipe, CityValidationDirective
    ]
    
})
export class SharedModule { }
