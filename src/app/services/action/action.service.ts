import { Injectable } from '@angular/core';
import { AttributesService } from '../attributes/attributes.service';
import { GamesService } from '../games/games.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  public counters: { [key: number]: number } = {};
  public color: string = '#2563eb';

  constructor(
    public attributes: AttributesService,
    public gamesService: GamesService
  ) {}

  getAction(componentID: number): string {
    this.counters[componentID] = 3;
    this.color = '#2563eb';
    return `${this.counters[componentID] || 0}`;
  }

  startAction(
    componentID: number,
    callback: (action: string) => void
  ): NodeJS.Timeout | undefined {
    const countSeconds = () => {
      this.counters[componentID]--;
      callback(`${this.counters[componentID]}`);
    };

    const interval: NodeJS.Timeout = setInterval(countSeconds, 1000);

    this.gamesService.games[componentID - 1].clicked = true;

    setTimeout(() => {
      clearInterval(interval);

      this.gamesService.games[componentID - 1].clicked = false;

      const result = Math.random() * (100 - 1) + 1;

      const word: string = this.gamesService.bet(result, componentID - 1);

      this.color = this.gamesService.colorButton(word);

      this.attributes.currentXP += 10;

      if (this.attributes.currentXP >= 100) {
        this.attributes.currentXP = 0;
        this.attributes.level++;
      }

      callback(word);
    }, 3000);

    return interval;
  }
}
