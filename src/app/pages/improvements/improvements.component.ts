import { Component } from '@angular/core';

import { ImprovementService } from 'src/app/services/improvement/improvement.service';

@Component({
  selector: 'app-improvements',
  templateUrl: './improvements.component.html',
  styleUrls: ['./improvements.component.scss']
})
export class ImprovementsComponent {
  constructor(public improvement: ImprovementService) {}
}
