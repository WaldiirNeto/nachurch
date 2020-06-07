import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'na-form-reservas',
  templateUrl: './form-reservas.component.html',
  styleUrls: ['./form-reservas.component.css']
})
export class FormReservasComponent implements OnInit {
  ocultarcheckbox = false;
  formReserva: FormGroup
  voluntario: string;
  ministerio: string;
  membro: string;
  cadastrou = false;
  constructor(private formBuild: FormBuilder,
    private firestore: AngularFirestore,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.formReserva = this.formBuild.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      horario: ['', Validators.required],
      voluntario: [''],
      ministerio: [''],
      membro: [''],
    })
  }

  listarMinisterio() {
    this.ocultarcheckbox = true;
    this.voluntario = this.formReserva.getRawValue().voluntario = 'SIM';
    this.formReserva.getRawValue().membro = 'SIM'

  }
  ocultarMinisterio() {
    this.ocultarcheckbox = false;
    this.voluntario = this.formReserva.getRawValue().voluntario = 'NAO';
    this.membro = 'NAO';
  }
  salvar() {
    this.ngxService.startLoader('loader-reservas');
    const form = this.formReserva.getRawValue();
    if (this.voluntario == 'SIM') {
      this.membro = 'SIM';
      this.ministerio = this.formReserva.getRawValue().ministerio;
    }
    else {
      this.voluntario = 'NAO';
      this.ministerio = 'NAO PARTICIPOU DE NENHUM MINISTERIO NESTE DIA ESPECIFICO';
      this.membro = this.formReserva.getRawValue().membro;
    }
    let now = new Date();
    const data = formatDate(now, 'dd/MM/yyyy H:mm:ss', 'en-US', '-4');
    const data_culto = "14/06/2020";
    const arrayFirestore = {
      "nome": this.formReserva.getRawValue().nome,
      "telefone": this.formReserva.getRawValue().telefone,
      "voluntario": this.voluntario,
      "ministerio": this.ministerio,
      "membro": this.membro,
      "horario": this.formReserva.getRawValue().horario,
      "data criacao": data,
      "data_culto": data_culto
    }
    this.cadastrou = true;
    this.ngxService.stopLoader('loader-reservas');

    console.log(arrayFirestore);
    const reservas = 'reservas_dia_14_06_2020';
    this.firestore.collection(reservas)
      .add(arrayFirestore).then((res) => {
        this.ngxService.stopLoader('loader-reservas');
        let top = document.getElementById('top');
        if (top !== null) {
          top.scrollIntoView();
          top = null;
        }
        console.log(res);
      }, (error) => console.log(error))
  }

}
