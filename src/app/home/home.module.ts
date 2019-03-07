import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

import { AboutAreaModule } from './about-area/about-area.module';
import { ActivesChurchModule } from './actives-church/actives-church.module';
import { CtaAreaModule } from './cta-area/cta-area.module';
import { HeroModule } from './photos/hero-slides/hero.module';
import { DonatesModule } from './donates/donates.module';
import { LatestNewsModule } from './latest-news/latest-news.module';
import { MinisteriosModule } from '../ministerios/ministerios.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule,
        HomeRoutingModule,
        HeroModule,
        CtaAreaModule,
        AboutAreaModule,
        ActivesChurchModule,
        DonatesModule,
        LatestNewsModule,
        MinisteriosModule]
})
export class HomeModule { }