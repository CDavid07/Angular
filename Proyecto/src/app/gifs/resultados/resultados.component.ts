import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  get resultados() {
    return this.gifsService.resultados;
    }
    constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

}
