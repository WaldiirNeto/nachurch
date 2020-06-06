import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasCultoComponent } from './reservas-culto.component';
import { ReservasCultoRoutingModule } from './reservas-culto.routing.module';
import { FormReservasComponent } from './form-reservas/form-reservas.component';
import { FormReservasModule } from './form-reservas/form-reservas.module';
import { BreadcumbAreaReservasModule } from './breadcumb-area-reservas/breadcumb-area-reservas.module';
import { BreadcumbAreaReservasComponent } from './breadcumb-area-reservas/breadcumb-area-reservas.component';

@NgModule({
  declarations: [ReservasCultoComponent],
  imports: [
    CommonModule,
    ReservasCultoRoutingModule,
    FormReservasModule,
    BreadcumbAreaReservasModule
  ]
})
export class ReservasCultoModule { }
