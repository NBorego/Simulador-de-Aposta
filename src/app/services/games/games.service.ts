import { Injectable } from '@angular/core';
import { Game } from 'src/types/games';
import { AttributesService } from '../attributes/attributes.service';
import { GameComponent } from 'src/app/components/game/game.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public games = <Game[]>[
    {
      id: 1,
      name: 'Trabalhar',
      gain: 5,
      loss: 0,
      chance: 100,
      level: 0,
      clicked: false
    },
    {
      id: 2,
      name: 'Apostar no truco',
      gain: 20,
      loss: 5,
      chance: 50,
      level: 0,
      clicked: false
    },
    {
      id: 3,
      name: 'Jogar no bicho',
      gain: 50,
      loss: 15,
      chance: 30,
      level: 5,
      clicked: false
    },
    {
      id: 4,
      name: 'Jogo do tigrinho',
      gain: 80,
      loss: 40,
      chance: 20,
      level: 10,
      clicked: false
    },
    {
      id: 5,
      name: 'Apostar em rinha de galo',
      gain: 100,
      loss: 60,
      chance: 20,
      level: 15,
      clicked: false
    },
    {
      id: 6,
      name: 'Bet',
      gain: 200,
      loss: 50,
      chance: 33,
      level: 20,
      clicked: false
    }
  ];
  constructor(public attributes: AttributesService) {}

  bet(result: number, id: number): string {
    if (result <= this.games[id].chance) {
      this.attributes.money += this.games[id].gain;
      return 'Ganhou!';
    }

    this.attributes.money -= this.games[id].loss;
    return 'Perdeu!';
  }

  colorButton(word: string): string {
    return word === 'Ganhou!' ? '#059669' : '#dc2626';
  }
}
