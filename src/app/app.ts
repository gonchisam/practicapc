import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


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
  
  nombreTienda: string = 'Dragonet';
  encargado: string = 'Gonchisam';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Laptops', 'PCs de escritorio', 'Accesorios'];

  
  producto: Producto = {
    nombre: 'pc gamer ryzen',
    precio: 678,
    disponible: false
  };
}