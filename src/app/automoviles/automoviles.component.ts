import { Component } from '@angular/core';

interface Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  anio: number;
  km: number;
  precio: string;
}

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.css']
})
export class AutomovilesComponent {
  vehiculos: Vehiculo[] = [
  ];

  constructor() { }
}
