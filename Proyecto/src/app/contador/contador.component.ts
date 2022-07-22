import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  saludo:string = 'hola'
  array:string[] = []
  objeto: any
  title: string = "Hola"
  numero: number = 10;


  constructor() { }

  ngOnInit(): void {
  }
  pintaAlgo(): void{
    console.log('Hola Mundo'); 
  }
  suma(a:number, b: number): void{
    console.log(a+b); 
  }

  acumular(valor: number){
    this.numero += valor //this hace referencia a la clase
    }
  


}
