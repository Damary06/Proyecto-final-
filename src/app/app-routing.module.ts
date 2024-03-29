import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AutomovilesComponent } from './automoviles/automoviles.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, pathMatch: 'full' },
  { path: 'automoviles', component: AutomovilesComponent, pathMatch: 'full' },
  { path: 'registrarse', component: RegistroComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
