import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  constructor(public gamesService: GamesService) {}
}
