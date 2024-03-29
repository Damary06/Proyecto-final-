import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AutomovilesComponent } from './automoviles/automoviles.component';
import { RegistroComponent } from './registro/registro.component';
const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'automoviles', component: AutomovilesComponent },
    { path: 'registrarse', component: RegistroComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' } 
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  