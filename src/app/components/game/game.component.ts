import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action/action.service';
import { ConvertToBRLService } from 'src/app/services/convert-to-brl/convert-to-brl.service';
import { GamesService } from 'src/app/services/games/games.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  action: string = 'Ação';
  color: string = '$white';
  interval?: NodeJS.Timeout;

  constructor(
    private conversionService: ConvertToBRLService,
    private actionService: ActionService,
    public gamesService: GamesService
  ) {}

  ngOnInit(): void {}

  convert = (money: number): string =>
    this.conversionService.convertToBRL(money);

  changeColor(value: number): string {
    if (value < 30) return 'red';

    if (value > 30 && value < 70) return 'yellow';

    return 'green';
  }

  actionButton() {
    if (environment.COMPONENT_WAS_CLICKED(this.actionService.clicked)) return;

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
