import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { CrearMercanciaComponent } from './crear-mercancia/crear-mercancia.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { CargoComponent } from './cargo/cargo.component';


const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},   
  {path: 'crearMercancia', component: CrearMercanciaComponent},
  {path: '* *', component: PagenotfoundComponent},   
  {path: 'crearEmpleado', component: CrearEmpleadoComponent},
  {path: 'cargo', component: CargoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ModMercanciaRoutingModule { }
