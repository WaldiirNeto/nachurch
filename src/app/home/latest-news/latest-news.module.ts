import { NgModule } from '@angular/core';
import { LatestNewsComponent } from './latest-news.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LatestNewsComponent],
    imports: [CommonModule],
    exports: [LatestNewsComponent]
})
export class LatestNewsModule {}