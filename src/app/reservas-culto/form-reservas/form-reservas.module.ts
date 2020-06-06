import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReservasComponent } from './form-reservas.component';

@NgModule({
  declarations: [FormReservasComponent],
  imports: [
    CommonModule
  ],
  exports: [FormReservasComponent]
})
export class FormReservasModule { }
