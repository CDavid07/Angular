import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag = false;
  activo=false;

cambiarFlag(){
    this.flag = !this.flag;
}

heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán América"];
  heroeBorrado: string = ' ';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }

  Cars: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'purple'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  itemNum = 1;
personNum = 2;
minutes = 2;

}
