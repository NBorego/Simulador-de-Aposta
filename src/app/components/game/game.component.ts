import { Component, Input, OnDestroy, inject } from '@angular/core';
import { ActionService } from 'src/app/services/action/action.service';
import { AttributesService } from 'src/app/services/attributes/attributes.service';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnDestroy {
  @Input() id: number = 0;
  action: string = 'Ação';
  interval?: NodeJS.Timeout;

  public actionService = inject(ActionService);
  public attributes = inject(AttributesService);
  public gamesService = inject(GamesService);

  changeColor(value: number): string {
    console.log('teste');
    if (value < 30) return 'red';

    if (value > 29 && value < 70) return 'yellow';

    return 'green';
  }

  actionButton() {
    if (this.gamesService.games[this.id].clicked === true) return;

    if (this.attributes.money < this.gamesService.games[this.id].loss) {
      return alert(`Voce não tem dinheiro suficiente para apostar!`);
    }

    this.action = this.actionService.getAction(
      this.gamesService.games[this.id].id
    );

    const callback = (newAction: string) => (this.action = newAction);

    this.interval = this.actionService.startAction(
      this.gamesService.games[this.id].id,
      callback
    );
  }

  ngOnDestroy = (): void => this.interval && clearInterval(this.interval);
}
