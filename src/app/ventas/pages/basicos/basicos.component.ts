import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower   : string = 'alejandro';
  nombreUpper   : string = 'ALEJANDRO';
  nombreCompleto: string = 'alEJandRo cENTuRioN';

  fecha: Date = new Date(); // fecha de hoy

  

}
