import { Component, Input, inject } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';
import { GamesService } from 'src/app/services/games/games.service';
import { ImprovementService } from 'src/app/services/improvement/improvement.service';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent {
  @Input() id: number = 0;

  public improvement = inject(ImprovementService);
  public gameService = inject(GamesService);
  public attributes = inject(AttributesService);

  actionButton() {
    if (this.attributes.money < this.improvement.improvements[this.id].price) {
      return alert(`Voce não tem dinheiro suficiente para apostar!`);
    }

    if (this.improvement.improvements[this.id].buy) return;

    this.improvement.improvements[this.id].buy = true;
    this.attributes.money -= this.improvement.improvements[this.id].price;

    this.gameService.games[this.id + 1].chance =
      this.improvement.improvements[this.id].chance;
  }
}
