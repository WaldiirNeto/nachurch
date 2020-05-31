import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuicoesComponent } from './contribuicoes.component';
import { ContribuicoesRoutingModule } from './contribuicoes.routing.module';
import { NgPaymentCardModule } from 'ng-payment-card';

@NgModule({
  declarations: [ContribuicoesComponent],
  imports: [
    CommonModule,
    ContribuicoesRoutingModule,
    NgPaymentCardModule
  ]
})
export class ContribuicoesModule { }
