import { NgModule } from '@angular/core';
import { notFoundComponent } from './not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [notFoundComponent],
    imports: [CommonModule],
    exports: [notFoundComponent]
})
export class notFoundModule { }