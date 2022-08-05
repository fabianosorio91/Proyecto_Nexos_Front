import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MercanciaService {

    actualizarMercancia(value: any) {
        throw new Error('Method not implemented.');
    }
    private API_CREAR = 'http://localhost:2021/Mercancia/CrearMercancia/';
    private API_MOSTRAR = 'http://localhost:2021/Mercancia/todaMercancia/';
    private API_BUSCARXID = 'http://localhost:2021/Mercancia/mostrarPorId/';
    private API_ELIMINAR = 'http://localhost:2021/Mercancia/Delete/';
    private API_EDITAR = 'http://localhost:2021/Mercancia/Actualizar/';
    private API_CREARE = 'http://localhost:2021/Empleado/CrearEmpleado';
    private API_MOSTRARE = 'http://localhost:2021/Empleado/mostrarEmpleado';


    constructor(private httpClient: HttpClient) { }

    public CrearMercancia(mercancia: any): Observable<any> {
        return this.httpClient.post(this.API_CREAR, mercancia);
    }

    public mostrarMercancia(): Observable<any> {
        return this.httpClient.get(this.API_MOSTRAR);
    }

    public mostrarMercanciaXId(id: number): Observable<any> {
        return this.httpClient.get(this.API_BUSCARXID + id);
    }

    public borrarMercancia(id: number, idEmpleado: number) {
        return this.httpClient.delete(this.API_ELIMINAR + id + "/" + idEmpleado);
    }

    public ActualizarMercancia(id: number) {

    }
 
}