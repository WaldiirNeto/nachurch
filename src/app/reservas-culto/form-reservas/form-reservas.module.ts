import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReservasComponent } from './form-reservas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFirebaseModule } from 'src/app/core/custom-firebase.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [FormReservasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFirebaseModule,
    NgxUiLoaderModule
  ],
  exports: [FormReservasComponent]
})
export class FormReservasModule { }
