<<<<<<< Updated upstream
import { Component } from '@angular/core';
//colocar antes de @component
interface MenuItem{
  ruta: string;
  texto: string;
}
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> Stashed changes
@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
<<<<<<< Updated upstream
   `
   li{
    cursor: pointer;
   }
   `
  ]
}) 
export class GraficaBarraComponent {
 
   //dentro de export class
   menu: MenuItem[] = [
    {ruta: '/graficas/barra', texto:'Barras'},
    {ruta: '/graficas/barra-doble', texto:'Barras Dobles'},
    {ruta: '/graficas/dona', texto:'Dona'},
    {ruta: '/graficas/dona-http', texto:'Dona Http'}
  ];

  voto(voto:number){
    console.log(voto);
    
  }
=======
  ]
})
export class GraficaBarraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> Stashed changes
}
