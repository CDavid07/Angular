import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombreLower: string = 'angular';
   nombreUpper: string = 'ANGULAR';
   nombreIntercalado: string = 'TALLER DE aNgUlAr';

   fecha: Date = new Date(); //Fecha actual
   //Decimalpipes y Currencypipes
   numeroReal: number = 3.14159265359;
   porcentaje: number = 1.3495;
   nombre: string = 'Mario';
   genero: string = 'masculino';

   invitacionMapa = {
     'masculino': 'bienvenido',
     'femenino': 'bienvenida'
   }
   cambiarNombre() {
    this.nombre = 'María',
    this.genero = 'femenino'
  }
  //i18nPlural
  clientes: string[] =['Maria', 'Pedro', 'Ana', 'Joaquin', 'Javier'];
  clientesMapa = {
  '=0': 'no tenemos ningún cliente esperando.',
  '=1': 'tenemos 1 cliente esperando.',
  'other': 'tenemos # clientes esperando.'
  }

  borrarClientes() {
  this.clientes.pop();
  }
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]
  persona = {
    nombre: 'Fernando',
    edad: 35,
    dirección: 'Ottawa, Canadá'
  }
  //Async Pipe
  miObservable = interval(1000);
  miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos data de promesa');
  }, 3000);
  });

}
