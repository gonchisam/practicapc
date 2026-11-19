import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz fuera de la clase (contrato para el producto)
interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Propiedades de la tienda
  nombreTienda: string = 'Dragonet';
  encargado: string = 'Gonchisam';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Laptops', 'PCs de escritorio', 'Accesorios'];

  // Objeto que cumple la interfaz Producto
  producto: Producto = {
    nombre: 'pc gamer ryzen',
    precio: 678,
    disponible: false
  };
}