import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productosCarrito = [
    {
      titulo:'Audifonos Bluethooth',
      imagen:'assets/images/audifonos.webp'
    },
    {
      titulo:'Smartwatch Xiaomi',
      imagen:'assets/images/smarthwatch.webp'
    },
    {
      titulo:'Camara Web HD',
      imagen:'assets/images/camara.webp'
    },
    {
      titulo:'Disco Duro Externo',
      imagen:'assets/images/disco-duro.webp'
    },
    {
      titulo:'Bocina Portatil',
      imagen:'assets/images/bocina.webp'
    },
  ]
}
