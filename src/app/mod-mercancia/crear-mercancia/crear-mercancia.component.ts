import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercanciaService } from '../services/mercancia.services';

@Component({
  selector: 'app-crear-mercancia',
  templateUrl: './crear-mercancia.component.html',
  styleUrls: ['./crear-mercancia.component.css']

})
export class CrearMercanciaComponent implements OnInit {
  crearForm: FormGroup;
  buscarForm: FormGroup;
  eliminarForm: FormGroup;
  mercancia: any;
  mercancia2: any;  

  constructor(private fb: FormBuilder, private mercanciaService: MercanciaService) { }

  ngOnInit(): void {

    this.crearForm = this.fb.group({
      id: [' ', Validators.required],
      nombreProducto: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      idEmpleadoModifica: ['', Validators.required],
      fechaModificacion: ['', Validators.required]

    });
    this.buscarForm = this.fb.group({
      id: [' ', Validators.required]
    });

    this.mercanciaService.mostrarMercancia().subscribe((resp: any) => {
      this.mercancia = resp;
    },
      (error: any) => { console.error(error) }
    );

    this.mercanciaService.mostrarMercanciaXId(94).subscribe((resp: any) => {
      this.mercancia2 = resp;
    },
      (error: any) => { console.error(error) }
    );
  }

  guardar() {
    let result = this.mercanciaService.CrearMercancia(this.crearForm.value).subscribe((resp: any) => {
      this.crearForm.reset();
      this.mercancia.push(resp);
    },
      (error: any) => { console.error(error) }
    )
  }
  eliminar(mercanciaRecibida: any) {
    console.log(mercanciaRecibida);
    this.mercanciaService.borrarMercancia(mercanciaRecibida.id, mercanciaRecibida.idEmpleado).subscribe((resp2: any) => {
      this.mercanciaService.mostrarMercancia().subscribe((resp: any) => {
        this.mercancia = resp;
      });
    })
  }

  buscar() {
    let id = this.buscarForm.value.id;
    this.mercanciaService.mostrarMercanciaXId(id).subscribe((resp: any) => {
      this.buscarForm.reset();
    });
  }

  editar(id: number){
    this.mercanciaService.ActualizarMercancia

    
  }

}