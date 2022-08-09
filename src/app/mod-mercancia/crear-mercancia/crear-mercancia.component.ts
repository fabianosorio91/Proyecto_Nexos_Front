import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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

  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: true,
      timer: 1500
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "crearMercancia"
      }
    })
  }

  showModal1() {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido borrado.',
          'success'
        )
      }
    })
  }

  showModal2() {
    Swal.fire('Puedes proceder a Editar')
  }

  constructor(private fb: FormBuilder,
    private mercanciaService: MercanciaService) { }

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

  crear() {
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

  editar(mercancia: any) {
    this.mercancia = mercancia;



  }


}