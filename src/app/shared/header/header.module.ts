import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountdownTimerModule } from 'ngx-countdown-timer';



@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule,CountdownTimerModule ],
    exports: [HeaderComponent]
})
export class headerModule { }