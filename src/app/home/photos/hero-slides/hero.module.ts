import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';


@NgModule({
   
    declarations: [HeroComponent],
    imports: [CommonModule, NgxHmCarouselModule],
    exports: [HeroComponent]
})
export class HeroModule {}