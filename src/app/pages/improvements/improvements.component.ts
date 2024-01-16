import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { ImprovementService } from 'src/app/services/improvement/improvement.service';

@Component({
  selector: 'app-improvements',
  templateUrl: './improvements.component.html',
  styleUrls: ['./improvements.component.scss']
})
export class ImprovementsComponent implements OnInit {
  constructor(public improvement: ImprovementService) {}

  ngOnInit(): void {}
}
