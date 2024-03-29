// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>¡Venta de Autos!</h1>
      <h1>¡Welcome!</h1>
      <nav>
        <a routerLink="/inicio" routerLinkActive="active">Inicio</a>
        <a routerLink="/automoviles" routerLinkActive="active">Automóviles</a>
        <a routerLink="/registrarse" routerLinkActive="active">Registrarse</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
