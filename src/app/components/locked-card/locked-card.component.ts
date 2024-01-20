import { Component, inject } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';
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
  action: string = 'Jogar';
  private interval?: NodeJS.Timeout;

  public improvement = inject(ImprovementService);
  public gamesService = inject(GamesService);
  public attributes = inject(AttributesService);
  public secretService = inject(SecretService);

  actionButton() {
    if (this.gamesService.secret.clicked === true) return;

    if (this.attributes.money < this.gamesService.secret.loss) {
      return alert(`Voce não tem dinheiro suficiente para apostar!`);
    }

    this.action = this.secretService.getAction();

    const callback = (newAction: string) => (this.action = newAction);

    this.interval = this.secretService.startAction(callback);
  }

  ngOnDestroy = (): void => this.interval && clearInterval(this.interval);
}
