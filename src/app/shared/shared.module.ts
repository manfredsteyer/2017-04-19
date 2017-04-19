import { CityPipe } from './pipes/city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe
    ],
    providers: [],
    exports: [
        CityPipe
    ]
    
})
export class SharedModule { }
