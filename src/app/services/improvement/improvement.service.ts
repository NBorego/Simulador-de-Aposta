import { Injectable } from '@angular/core';
import { GamesService } from '../games/games.service';
import { Improvement } from 'src/types/improvements';

@Injectable({
  providedIn: 'root'
})
export class ImprovementService {
  public improvements = <Improvement[]>[
    {
      id: 1,
      name: 'Apostar no truco',
      price: 200,
      chance: 100,
      buy: false
    },
    {
      id: 2,
      name: 'Jogar no bicho',
      price: 500,
      chance: 95,
      buy: false
    },
    {
      id: 3,
      name: 'Jogo do tigrinho',
      price: 800,
      chance: 90,
      buy: false
    },
    {
      id: 4,
      name: 'Rinha de galo',
      price: 1000,
      chance: 80,
      buy: false
    },
    {
      id: 5,
      name: 'Bet',
      price: 1500,
      chance: 80,
      buy: false
    }
  ];

  constructor(public gamesService: GamesService) {}
}
