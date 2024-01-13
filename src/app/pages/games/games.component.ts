import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  constructor(public gamesService: GamesService) {}

  ngOnInit(): void {}
}
