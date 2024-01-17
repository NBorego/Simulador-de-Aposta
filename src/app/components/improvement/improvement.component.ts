import { Component, Input } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';
import { ConvertToBRLService } from 'src/app/services/convert-to-brl/convert-to-brl.service';
import { GamesService } from 'src/app/services/games/games.service';
import { ImprovementService } from 'src/app/services/improvement/improvement.service';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent {
  @Input() id: number = 0;

  constructor(
    private conversionService: ConvertToBRLService,
    public improvement: ImprovementService,
    public gameService: GamesService,
    public attributes: AttributesService
  ) {}

  convert = (money: number): string =>
    this.conversionService.convertToBRL(money);

  actionButton() {
    if (this.attributes.money < this.improvement.improvements[this.id].price) {
      return alert(
        `Voce precisa ter ${this.conversionService.convertToBRL(
          this.improvement.improvements[this.id].price
        )} para comprar essa melhoria.`
      );
    }

    if (this.improvement.improvements[this.id].buy) return;

    this.improvement.improvements[this.id].buy = true;
    this.attributes.money -= this.improvement.improvements[this.id].price;

    this.gameService.games[this.id + 1].chance =
      this.improvement.improvements[this.id].chance;
  }
}
