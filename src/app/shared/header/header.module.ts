import { NgModule } from '@angular/core';
import { headerComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [headerComponent],
    imports: [CommonModule, RouterModule],
    exports: [headerComponent]
})
export class headerModule { }