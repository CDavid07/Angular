import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-gif-sidebar',
  templateUrl: './gif-sidebar.component.html',
  styles: [
  ]
})
export class GifSidebarComponent implements OnInit {

  get historial() {
    return this.gifsService.historial;
    }
    constructor( private gifsService: GifsService ) { }
    buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
    }
    

  ngOnInit(): void {
  }

}
