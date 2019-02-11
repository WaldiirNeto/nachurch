import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HeroModule } from '../photos/hero-slides/hero.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, HeroModule]
})
export class HomeModule { }