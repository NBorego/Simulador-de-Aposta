import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action/action.service';
import { ConvertToBRLService } from 'src/app/services/convert-to-brl/convert-to-brl.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @Input() ID: number = 0;
  title: string = 'trabalar...';
  chance: number = 100;
  gain: number = 5;
  loss: number = 0;
  action: string = 'Ação';
  color: string = '$white';
  interval?: NodeJS.Timeout;

  constructor(
    private conversionService: ConvertToBRLService,
    private actionService: ActionService
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
    this.action = this.actionService.getAction(this.ID);

    const callback = (newAction: string) => (this.action = newAction);

    this.interval = this.actionService.startAction(this.ID, callback);
  }

  ngOnDestroy = (): void => this.interval && clearInterval(this.interval);
}
