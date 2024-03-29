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
      loss: 10,
      chance: 50,
      level: 0,
      clicked: false
    },
    {
      id: 3,
      name: 'Jogar no bicho',
      gain: 50,
      loss: 20,
      chance: 30,
      level: 5,
      clicked: false
    },
    {
      id: 4,
      name: 'Jogo do tigrinho',
      gain: 80,
      loss: 50,
      chance: 20,
      level: 10,
      clicked: false
    },
    {
      id: 5,
      name: 'Rinha de galo',
      gain: 100,
      loss: 70,
      chance: 20,
      level: 15,
      clicked: false
    },
    {
      id: 6,
      name: 'Bet esportivo',
      gain: 200,
      loss: 100,
      chance: 33,
      level: 20,
      clicked: false
    }
  ];

  public secret = <Game>{
    id: 1,
    name: 'Campeonato de Poker',
    gain: 5000,
    loss: 1000,
    chance: 30,
    level: 25,
    clicked: false
  };

  constructor(public attributes: AttributesService) {}

  bet(result: number, id: number) {
    if (result <= this.games[id].chance) {
      this.attributes.money += this.games[id].gain;
    } else {
      this.attributes.money -= this.games[id].loss;
      if (this.attributes.money < 0) this.attributes.money = 0;
    }
  }

  betSecret(result: number) {
    if (result <= this.secret.chance) {
      this.attributes.money += this.secret.gain;
      this.attributes.winner = true;
    } else {
      this.attributes.money -= this.secret.loss;
      if (this.attributes.money < 0) this.attributes.money = 0;
    }
  }
}
