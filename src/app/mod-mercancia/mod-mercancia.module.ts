import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModMercanciaRoutingModule } from './mod-mercancia-routing.module';
import { CrearMercanciaComponent } from './crear-mercancia/crear-mercancia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataTablesModule } from "angular-datatables";

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
    MatPaginatorModule,
    DataTablesModule

  ], exports: [
    CommonModule,
    FormsModule,
    ModMercanciaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ModMercanciaModule { }
