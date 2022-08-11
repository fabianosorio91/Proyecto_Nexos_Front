import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CargoService {

     
    private API_CREARC = 'http://localhost:2021/Cargo/CrearCargo';
    private API_MOSTRARC = 'http://localhost:2021/Cargo/MostarCargos';
    


constructor(private httpClient: HttpClient) { }

public crearCargo(cargo: any): Observable<any> {
    return this.httpClient.post(this.API_CREARC, cargo);

}
 public mostrarCargo(): Observable<any> {
     return this.httpClient.get(this.API_MOSTRARC);
 }

public borrarEmpleado() {}

public ActualizarEmpleado() {}
}