import { Component } from '@angular/core';

@Component({
  selector: 'app-footer', //nombre seleccionado
  templateUrl: './footer.component.html', // NOTA: templateUrl hace llaado a una archivo externo.
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor: any ={nombre:'Ronald', apellido:'Quispe'}; //Atributos para footer
}
