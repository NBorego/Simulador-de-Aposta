import { Component, inject } from '@angular/core';
import { ActionService } from 'src/app/services/action/action.service';
import { AttributesService } from 'src/app/services/attributes/attributes.service';
import { ConvertToBRLService } from 'src/app/services/convert-to-brl/convert-to-brl.service';
import { GamesService } from 'src/app/services/games/games.service';
import { ImprovementService } from 'src/app/services/improvement/improvement.service';
import { SecretService } from 'src/app/services/secret/secret.service';

@Component({
  selector: 'app-locked-card',
  templateUrl: './locked-card.component.html',
  styleUrls: ['./locked-card.component.scss']
})
export class LockedCardComponent {
  id: number = 0;
  name: string = 'Campeonato de Poker';
  chance: number = 30;
  action: string = 'Jogar';
  gain: number = 5000;
  loss: number = 500;
  private interval?: NodeJS.Timeout;

  private conversionService = inject(ConvertToBRLService);
  public improvement = inject(ImprovementService);
  public gamesService = inject(GamesService);
  public attributes = inject(AttributesService);
  public secretService = inject(SecretService);

  convert = (money: number): string =>
    this.conversionService.convertToBRL(money);

  actionButton() {
    if (this.gamesService.secret.clicked === true) return;

    if (this.attributes.money < this.loss) {
      alert(
        `Voce precisa ter ${this.conversionService.convertToBRL(
          this.loss
        )} para apostar!`
      );
      return;
    }

    this.action = this.secretService.getAction();

    const callback = (newAction: string) => (this.action = newAction);

    this.interval = this.secretService.startAction(callback);
  }

  ngOnDestroy = (): void => this.interval && clearInterval(this.interval);
}
