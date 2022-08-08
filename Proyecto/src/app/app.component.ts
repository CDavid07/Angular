import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string= "Interpolation";
  Url="https://pbs.twimg.com/media/EmA-1QBXgAIIehn.jpg";
  isDisabled: boolean= false;

  name: string = "";
  setValue(){
    this.name = "Nancy";
  }

  
  saludar() {
    alert("Hola mundo")
  }

}
