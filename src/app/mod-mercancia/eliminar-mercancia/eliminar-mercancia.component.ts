import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercanciaService } from '../services/mercancia.services';
import { CrearMercanciaComponent } from '../crear-mercancia/crear-mercancia.component';

@Component({
  selector: 'app-eliminar-mercancia',
  templateUrl: './eliminar-mercancia.component.html',
  styleUrls: ['./eliminar-mercancia.component.css']
})
export class EliminarMercanciaComponent implements OnInit {

  nexosForm: FormGroup;
  Mercancia: any;
  @ViewChild(CrearMercanciaComponent) child: number;
  constructor(private fb: FormBuilder, private mercanciaService: MercanciaService) { }

  ngOnInit(): void {
    this.nexosForm = this.fb.group({
      id: [' ', Validators.required],
      nombreProducto: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      idEmpleadoModifica: ['', Validators.required],
      fechaModificacion: ['', Validators.required]
    });
  }
id:number;
ngAfterViewInit(){
  
}
  guardar() {
    
   
  }
}
