import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private counters: { [key: number]: number } = {};

  constructor() {}

  getAction(componentID: number): string {
    this.counters[componentID] = 3;
    return `${this.counters[componentID] || 0}`;
  }

  startAction(
    componentID: number,
    callback: (action: string) => void
  ): NodeJS.Timeout {
    const countSeconds = () => {
      this.counters[componentID]--;
      callback(`${this.counters[componentID]}`);
    };

    const interval: NodeJS.Timeout = setInterval(countSeconds, 1000);

    setTimeout(() => {
      clearInterval(interval);
      callback(`Ação`);
    }, 3000);

    return interval;
  }
}
