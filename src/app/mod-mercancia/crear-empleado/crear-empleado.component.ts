import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../services/empleado.services';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']

})
export class CrearEmpleadoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  crearEForm: FormGroup;
  buscarEForm: FormGroup;
  empleado: any;

  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: true,
      timer: 1500
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "crearEmpleado"
      }
    })
  }

  showModal1(Empleado: any) {
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
        this.eliminarE(Empleado);
        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido borrado.',
          'success'
        )
      }
    })
  }

  // showModal2() {
  //   Swal.fire('Puedes proceder a Editar')
  // }

  constructor(private fb: FormBuilder,
    private EmpleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: {
      url: "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                 }}

    this.crearEForm = this.fb.group({
      id: ['', Validators.required],
      empleado: ['', Validators.required],
      edad: ['', Validators.required],
      idCargo: ['', Validators.required],
      fechaIngreso: ['', Validators.required],

      function() { $('#table_id').DataTable(); }

    });

    this.buscarEForm = this.fb.group({
      id: [' ', Validators.required]
    });


    this.EmpleadoService.mostrarEmpleado().subscribe((resp: any) => {
      this.empleado = resp;
    },
      (error: any) => { console.error(error) }
    );
  }

  crearE() {
    let result = this.EmpleadoService.CrearEmpleado(this.crearEForm.value).subscribe((resp: any) => {
      this.crearEForm.reset();
      this.empleado.push(resp);
    },
      (error: any) => { console.error(error) }
    )
  }

  eliminarE(empleadoRecibido: any) {
    console.log(empleadoRecibido);
    this.EmpleadoService.borrarEmpleado(empleadoRecibido.id).subscribe((resp2: any) => {
      this.EmpleadoService.mostrarEmpleado().subscribe((resp: any) => {
        this.empleado = resp;
      });
    })
  }

  editarE(empleado: any) {
    this.empleado = empleado;

  }

  buscar() { }



}
