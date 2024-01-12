import { Injectable } from '@angular/core';
import { AttributesService } from '../attributes/attributes.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  public counters: { [key: number]: number } = {};
  public clicked: boolean = false;

  constructor(public attributes: AttributesService) {}

  getAction(componentID: number): string {
    this.counters[componentID] = 3;
    return `${this.counters[componentID] || 0}`;
  }

  startAction(
    componentID: number,
    callback: (action: string) => void
  ): NodeJS.Timeout | undefined {
    if (environment.COMPONENT_WAS_CLICKED(this.clicked)) return;

    const countSeconds = () => {
      this.counters[componentID]--;
      callback(`${this.counters[componentID]}`);
    };

    const interval: NodeJS.Timeout = setInterval(countSeconds, 1000);

    this.clicked = true;

    setTimeout(() => {
      clearInterval(interval);

      this.clicked = false;

      this.attributes.money += 5;
      this.attributes.currentXP += 5;

      if (this.attributes.currentXP >= 100) {
        this.attributes.currentXP = 0;
        this.attributes.level++;
      }

      callback(`Ação`);
    }, 3000);

    return interval;
  }
}
