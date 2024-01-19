import { Injectable, inject } from '@angular/core';
import { GamesService } from '../games/games.service';
import { AttributesService } from '../attributes/attributes.service';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  public counters: number = 3;

  public attributes = inject(AttributesService);
  public gamesService = inject(GamesService);

  getAction(): string {
    this.counters = 3;

    return `${this.counters || 0}`;
  }

  startAction(callback: (action: string) => void): NodeJS.Timeout | undefined {
    const countSeconds = () => {
      this.counters--;
      callback(`${this.counters}`);
    };

    const interval: NodeJS.Timeout = setInterval(countSeconds, 1000);

    this.gamesService.secret.clicked = true;

    setTimeout(() => {
      clearInterval(interval);

      this.gamesService.secret.clicked = false;

      const result = Math.random() * (100 - 1) + 1;

      this.gamesService.betSecret(result);

      this.attributes.currentXP += 10;

      if (this.attributes.currentXP >= 100) {
        this.attributes.currentXP = 0;
        this.attributes.level++;
      }

      callback('Ação');
    }, 3000);

    return interval;
  }
}
