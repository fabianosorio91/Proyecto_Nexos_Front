import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nexosForm!: FormGroup;
  buscarForm!: FormGroup;
  mercancia: any;
  mercanciaService: any;


  constructor(
    public fb: FormBuilder,

  ) {

  }
  ngOnInit(): void {
    this.nexosForm = this.fb.group({
      id: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      idEmpleadoModifica: ['', Validators.required],
      fechaModificacion: ['', Validators.required]
    });;

  }

  Guardar(): void {
    this.mercanciaService.CrearMercancia(this.nexosForm.value).subscribe((Response: any) => {
      this.nexosForm.reset();
      this.mercancia.push(Response);
    },
      (error: any) => { console.error(error) }
    )
  }
}
