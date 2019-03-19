import { NgModule } from '@angular/core';
import { AreaPastorsComponent } from './area-pastors.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AreaPastorsComponent],
    imports : [CommonModule],
    exports : [AreaPastorsComponent]
})
export class AreaPastorModule {}