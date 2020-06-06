import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'na-form-reservas',
  templateUrl: './form-reservas.component.html',
  styleUrls: ['./form-reservas.component.css']
})
export class FormReservasComponent implements OnInit {
  ocultarcheckbox = false;

  constructor() { }

  ngOnInit() {
  }

  listarMinisterio() {
    this.ocultarcheckbox = true;
  }

}
