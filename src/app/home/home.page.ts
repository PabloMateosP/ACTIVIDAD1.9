import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  peso: number = 0;
  altura: number = 0;
  txtMensaje: string = "";

  constructor() {
    this.consultarIMC();
  }

  consultarIMC() {
    console.log("altura= " + this.altura);
    if (this.peso / Math.pow(this.altura, 2) <= 18.5) {
      console.log("BAJO PESO, IMC <= 18.5");
      this.txtMensaje = "BAJO PESO, IMC <= 18.5";
    } else if (this.peso / Math.pow(this.altura, 2) >= 18.5 && this.peso / Math.pow(this.altura, 2) <= 24.9) {
      console.log("PESO NORMAL, IMC entre 18.5 - 24.9");
      this.txtMensaje = "PESO NORMAL, IMC entre 18.5 - 24.9";
    } else if (this.peso / Math.pow(this.altura, 2) >= 25 && this.peso / Math.pow(this.altura, 2) <= 29.9) { //Sobrepeso 25 - 29.9
      console.log("SOBREPESO, IMC entre 25 - 29.9");
      this.txtMensaje = "SOBREPESO, IMC entre 25 - 29.9";
    } else if (this.peso / Math.pow(this.altura, 2) >= 30 && this.peso / Math.pow(this.altura, 2) <= 34.9) { //Obesidad tipo 1 30 - 34.9
      console.log("OBESIDAD TIPO 1, IMC entre 30 - 34.9");
      this.txtMensaje = "OBESIDAD TIPO 1, IMC entre 30 - 34.9";
    } else if (this.peso / Math.pow(this.altura, 2) >= 35 && this.peso / Math.pow(this.altura, 2) <= 39.9) { //Obesidad tipo 2 35 - 39.9
      console.log("OBESIDAD TIPO 2, IMC entre 35 - 39.9");
      this.txtMensaje = "OBESIDAD TIPO 2, IMC entre 35 - 39.9";
    } else if (this.peso / Math.pow(this.altura, 2) >= 40) { //Obesidad tipo 3 >40
      console.log("OBESIDAD TIPO 3, IMC por encima de 40");
      this.txtMensaje = "OBESIDAD TIPO 3, IMC por encima de 40";
    }

  }


  reinciarPartida() {
    this.altura = 0;
    this.txtMensaje = "";
    this.txtMensaje = "";

  }
}
