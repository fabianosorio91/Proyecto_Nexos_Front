import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercanciaService } from '../services/mercancia.services';

@Component({
  selector: 'app-actualizar-mercancia',
  templateUrl: './actualizar-mercancia.component.html',
  styleUrls: ['./actualizar-mercancia.component.css']
})
export class ActualizarMercanciaComponent implements OnInit {

  nexosForm: FormGroup;
  Mercancia: any;

  constructor(private fb: FormBuilder, private   mercanciaService: MercanciaService) { }

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

  guardar() {
    this.mercanciaService.CrearMercancia(this.nexosForm.value).subscribe((response: any) => {
      this.nexosForm.reset();
    },
      (error: any) => { console.error(error) }


    )


  }
}
