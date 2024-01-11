import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor() {}

  actionButton(textButton: string) {
    let seconds: number = 3;

    textButton = `${seconds}`;

    const countSeconds = () => {
      seconds--;
      return (textButton = `${seconds}`);
    };

    let interval: NodeJS.Timeout = setInterval(countSeconds, 1000);

    setTimeout(() => {
      clearInterval(interval);

      textButton = `Ação`;
    }, 3000);
  }
}
