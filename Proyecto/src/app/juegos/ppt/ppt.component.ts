import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  title() {
    throw new Error('Method not implemented.');
  }
  result: string= '';
  pointsUser = 0;
  pointsComp =  0;
  tiempo:number = 5;
  interval: any;

  constructor(private playGame: GameService, private scoreGame: ScoreService) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
    this.temporizador();
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    console.log(result);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    this.tiempo=5;
  }

  temporizador(): void {
    this.interval = setInterval(() => {
      this.tiempo--;
      if(this.tiempo==0){
        const result = this.scoreGame.lose();
        this.result= result.message;
        this.pointsUser += result.userAdd;
        this.pointsComp += result.compAdd;
        this.tiempo = 5;
      }
    },1000)
  }

}
