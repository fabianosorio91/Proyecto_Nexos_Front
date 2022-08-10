import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {

     
    private API_CREARE = 'http://localhost:2021/Empleado/CrearEmpleado';
    private API_MOSTRARE = 'http://localhost:2021/Empleado/MostarEmpleados';
    private API_ELIMINARE = 'http://localhost:2021/Empleado/BorrarEmpleado/';
    //private API_ACTUALIZARE = 'http://localhost:2021/Empleado/ActualizarE/';


constructor(private httpClient: HttpClient) { }

public CrearEmpleado(empleado: any): Observable<any> {
    return this.httpClient.post(this.API_CREARE, empleado);

}
public mostrarEmpleado(): Observable<any> {
    return this.httpClient.get(this.API_MOSTRARE);
}

public borrarEmpleado(id: number) {
    return this.httpClient.delete(this.API_ELIMINARE + id);
}

public ActualizarEmpleado(id: number) {

}
}