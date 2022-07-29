import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { MercanciaService } from '../services/mercancia.services';

@Component({
  selector: 'app-buscar-mercancia',
  templateUrl: './buscar-mercancia.component.html',
  styleUrls: ['./buscar-mercancia.component.css']
})
export class BuscarMercanciaComponent implements OnInit {

  buscarForm: FormGroup;
  mercancia: any;

  constructor(private fb: FormBuilder, private mercanciaService: MercanciaService) { }

  ngOnInit(): void {
    this.buscarForm = this.fb.group({
      id: [' ', Validators.required]
      
    });

    //metodo para mostrar la mercancia
    this.mercanciaService.mostrarMercanciaXId(79).subscribe((resp: any) => {
      console.log();
      this.mercancia = resp;
     // this.mercancia.push(resp);
    },
      (error: any) => { console.error(error) }
    );
    

  }
  //metodo para buscar la mercancia
  buscar() {
    let resultado=this.buscarForm.value;

    
     this.mercanciaService.mostrarMercanciaXId(resultado.id).subscribe((resp: any) => { 
       this.buscarForm.reset();
      this.mercancia.push(resp);
     },
       (error: any) => { console.error(error) }
     )
     
  }
}