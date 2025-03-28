import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:[ './products.component.scss']
})
export class ProductsComponent {
  productos = [
    {id: 1, nombre: 'Laptop Lenovo', precio: 1899},
    {id: 2, nombre: 'Smathphone Samsung', precio:9999},
    {id: 3, nombre: 'Monito LG 24', precio: 3999},
    {id: 4, nombre: 'Teclado Mecanico Redragon', precio:1299},
    {id: 5, nombre: 'Mouse Inalambrico Logitech', precio:799}
  ]
}
