import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinisteriosComponent } from './ministerios.component';
import { MinisteriosRoutingModule } from './ministerios.routing.module';
import { BreadcumbAreaStartModule } from './breadcumb-area-start/breadcumb-area-start.module';
import { AreaStartMinisteriosModule } from './area-start-ministerios/area-start-ministerios.module';
import { AreaPastorModule } from './area-pastors/area-pastors.module';
import { CtaAreaModule } from '../home/cta-area/cta-area.module';

@NgModule({
    declarations: [MinisteriosComponent],
    imports: [CommonModule, MinisteriosRoutingModule, BreadcumbAreaStartModule, AreaStartMinisteriosModule, AreaPastorModule, CtaAreaModule],
    exports: [MinisteriosComponent]

})
export class MinisteriosModule {
}