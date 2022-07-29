import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ModMercanciaModule } from './mod-mercancia/mod-mercancia.module';
import { BuscarMercanciaComponent } from './mod-mercancia/buscar-mercancia/buscar-mercancia.component';
import { ActualizarMercanciaComponent } from './mod-mercancia/actualizar-mercancia/actualizar-mercancia.component';
import { EliminarMercanciaComponent } from './mod-mercancia/eliminar-mercancia/eliminar-mercancia.component';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    AppComponent,
    PagenotfoundComponent,
    BuscarMercanciaComponent,
    ActualizarMercanciaComponent,
    EliminarMercanciaComponent,
        

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
    MatButtonModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
