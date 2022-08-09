import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModMercanciaRoutingModule } from './mod-mercancia-routing.module';
import { CrearMercanciaComponent } from './crear-mercancia/crear-mercancia.component';
//import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CrearMercanciaComponent,  
    //CrearEmpleadoComponent,
   

  ],
  imports: [
    CommonModule,
    ModMercanciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule

  ], exports: [
    CommonModule,
    FormsModule,
    ModMercanciaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ModMercanciaModule { }
