import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ModMercanciaModule } from './mod-mercancia/mod-mercancia.module';
import { BuscarMercanciaComponent } from './mod-mercancia/buscar-mercancia/buscar-mercancia.component';
import { ActualizarMercanciaComponent } from './mod-mercancia/actualizar-mercancia/actualizar-mercancia.component';
import { EliminarMercanciaComponent } from './mod-mercancia/eliminar-mercancia/eliminar-mercancia.component';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { CrearEmpleadoComponent } from './mod-mercancia/crear-empleado/crear-empleado.component';
import { CargoComponent } from './mod-mercancia/cargo/cargo.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    AppComponent,
    PagenotfoundComponent,
    BuscarMercanciaComponent,
    ActualizarMercanciaComponent,
    EliminarMercanciaComponent,
    CrearEmpleadoComponent,
    CargoComponent,
    FooterComponent,         

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModMercanciaModule,
    NgxPaginationModule,
    MatPaginatorModule,
    ToastrModule,
    MatButtonModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
