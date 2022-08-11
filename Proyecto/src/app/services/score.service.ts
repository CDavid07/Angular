import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  lose():
  {
    message: string;
    userAdd: number;
    compAdd: number;
  }

  {
    let playStatus = {
      message: 'Gana la computadora',
      userAdd: 0,
      compAdd: 1,
  };
  return playStatus;
  }
}
