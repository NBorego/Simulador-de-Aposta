import { Component, OnInit } from '@angular/core';
import { AttributesService } from 'src/app/services/attributes/attributes.service';

import { ConvertToBRLService } from 'src/app/services/convert-to-brl/convert-to-brl.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  constructor(
    private conversionService: ConvertToBRLService,
    public attributes: AttributesService
  ) {}

  ngOnInit(): void {}

  convert(money: number): string {
    return this.conversionService.convertToBRL(money);
  }
}
