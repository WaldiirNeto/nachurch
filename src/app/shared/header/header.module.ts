import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarModule } from '../components/sidebar/sidebar.module';



@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule,CountdownTimerModule, MatToolbarModule, SidebarModule],
    exports: [HeaderComponent]
})
export class headerModule { }
