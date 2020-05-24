import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinistracoesComponent } from './ministracoes.component';
import { MinistracoesRoutingModule } from './ministracoes.routing.module';

@NgModule({
  declarations: [MinistracoesComponent],
  imports: [
    CommonModule,
    MinistracoesRoutingModule
  ],
  exports:[MinistracoesComponent]
})
export class MinistracoesModule { }
