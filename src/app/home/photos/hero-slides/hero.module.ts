import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';
import {OwlModule} from '../../../../../node_modules/ngx-owl-carousel';


@NgModule({
 
    declarations: [HeroComponent],
    imports: [CommonModule, OwlModule],
    exports: [HeroComponent]
})
export class HeroModule {}