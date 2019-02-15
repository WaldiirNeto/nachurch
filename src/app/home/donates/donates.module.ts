import { NgModule } from '@angular/core';
import { DonatesComponent } from './donates.component';
import { CommonModule } from '@angular/common';
import { OwlModule } from '../../../../node_modules/ngx-owl-carousel';

@NgModule({
    declarations: [DonatesComponent],
    imports: [CommonModule, OwlModule],
    exports: [DonatesComponent]
})

export class DonatesModule { }