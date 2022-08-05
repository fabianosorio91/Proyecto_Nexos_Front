import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ActualizarMercanciaComponent } from './actualizar-mercancia/actualizar-mercancia.component';
import { BuscarMercanciaComponent } from './buscar-mercancia/buscar-mercancia.component'; 
import { CrearMercanciaComponent } from './crear-mercancia/crear-mercancia.component';
import { EliminarMercanciaComponent } from './eliminar-mercancia/eliminar-mercancia.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},   
  {path: 'crearMercancia', component: CrearMercanciaComponent},
  {path: 'buscarMercancia', component: BuscarMercanciaComponent},
  {path: 'actualizarMercancia', component: ActualizarMercanciaComponent},
  {path: 'eliminarMercancia', component: EliminarMercanciaComponent}, 
  {path: '* *', component: PagenotfoundComponent},   
  {path: 'crearEmpleado', component: CrearEmpleadoComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModMercanciaRoutingModule { }
