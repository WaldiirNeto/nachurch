import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinisteriosComponent } from './ministerios.component';
import { MinisteriosRoutingModule } from './ministerios.routing.module';
import { BreadcumbAreaStartModule } from './breadcumb-area-start/breadcumb-area-start.module';
import { AreaStartMinisteriosModule } from './area-start-ministerios/area-start-ministerios.module';

@NgModule({
    declarations: [MinisteriosComponent],
    imports: [CommonModule, MinisteriosRoutingModule, BreadcumbAreaStartModule, AreaStartMinisteriosModule],
    exports: [MinisteriosComponent]

})
export class MinisteriosModule {
}