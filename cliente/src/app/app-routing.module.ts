import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {ListarProductosComponent} from "./components/listar-productos/listar-productos.component";
import {CrearProductoComponent} from "./components/crear-producto/crear-producto.component";

const routes: Routes = [ //agregamos un obj
  //path:: /url , component:: what component gonna use (which template)
  { path: '', component:ListarProductosComponent },
  { path: 'crear-producto', component:CrearProductoComponent },
  { path: 'editar-producto/:id', component:CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, //IF WRONG URL, then gonna redirect to ' / ' . Then, pathMath:: comparamos toda la URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
