import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CargoService } from '../services/cargo.services';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  crearCForm: FormGroup;
  buscarCForm: FormGroup;
  cargo: any;

  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: true,
      timer: 1500
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "cargo"
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

  constructor(private fb: FormBuilder,
    private CargoService: CargoService) { }

  ngOnInit(): void {

    this.dtOptions = {
      language: {
      url: "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                 }}

    this.crearCForm = this.fb.group({
      id: ['', Validators.required],
      nombreCargo: ['', Validators.required],
     
    });

    this.buscarCForm = this.fb.group({
      id: [' ', Validators.required]
    });

    this.CargoService.mostrarCargo().subscribe((resp: any) => {
      this.cargo = resp;
    },
      (error: any) => { console.error(error) }
    );
  }

  crearC() {
    let result = this.CargoService.crearCargo(this.crearCForm.value).subscribe((resp: any) => {
      this.crearCForm.reset();
      this.cargo.push(resp);
    },
      (error: any) => { console.error(error) }
    )
  }

  eliminarC(){}
  editarC(){}
  buscarC(){}
}
