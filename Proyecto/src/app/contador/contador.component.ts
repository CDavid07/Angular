import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title: string = "Contador"
  numero: number = 10;

  acumular(valor: number){
	this.numero += valor
  }

  constructor() { }

  ngOnInit(): void {
  }
 
  mensajeHijo:string='';

  onMensajeHijo(mensaje: string) {
      this.mensajeHijo=mensaje;
  }

  getMensaje(e: any){
    console.log(e);
  }

   
  pintaAlgo(): void{
    console.log('Hola Mundo'); 
  }
  suma(a:number, b: number): void{
    console.log(a+b); 
  }
 


}
