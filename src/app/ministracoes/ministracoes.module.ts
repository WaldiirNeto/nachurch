import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinistracoesComponent } from './ministracoes.component';
import { MinistracoesRoutingModule } from './ministracoes.routing.module';
import { BreadcumbAreaMinistracoesModule } from './breadcumb-area-ministracoes/breadcumb-area-ministracoes.module';

@NgModule({
  declarations: [MinistracoesComponent],
  imports: [
    CommonModule,
    MinistracoesRoutingModule,
    BreadcumbAreaMinistracoesModule
  ],
  exports:[MinistracoesComponent]
})
export class MinistracoesModule { }
