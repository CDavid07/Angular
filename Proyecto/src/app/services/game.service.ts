import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Roca, Papel, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

game(userChoice: string): {
    message: string;
    userAdd: number;
    compAdd: number;
} 

{
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);

    let playStatus = {
        message: '',
        userAdd: 0,
        compAdd: 0,
    };

    switch (playUserComp) {
    // Gana jugador
    case 'rs':
    case 'sp':
    case 'pr':

    playStatus = {
        message: 'Ganaste',
        userAdd: 1,
        compAdd: 0,
    };
    break;
    
      // Gana la computadora
    case 'rp':
    case 'ps':
    case 'sr':
    
    playStatus = {
        message: 'Gana la computadora',
        userAdd: 0,
        compAdd: 1,
    };
    break;
    
    // Empate
    case 'rr':
    case 'pp':
    case 'ss':
    
    playStatus = {
            message: 'Se ha elegido la misma jugada y han empatado',
            userAdd: 0,
            compAdd: 0,
        };
        break;
    }
    return playStatus;
}

}
