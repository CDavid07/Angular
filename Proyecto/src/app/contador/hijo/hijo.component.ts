import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() texto: string='';
  @Input() usuarioInChild: string='';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventoHijo = new EventEmitter<string>();

enviarPadre() { 
   this.eventoHijo.emit("evento hijo!!!!")
}

mensaje: string = "Hola mundo";
 
@Output() miEvento = new EventEmitter<string>();
  
ejecutarEvento()
  {
    this.miEvento.emit(this.mensaje);
  }

}
