import { NgModule } from '@angular/core';
import { AboutAreaComponent } from './about-area.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AboutAreaComponent],
    imports: [CommonModule],
    exports: [AboutAreaComponent]
})

export class AboutAreaModule {}