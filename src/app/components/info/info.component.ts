import { Component, OnInit } from '@angular/core';
import { ConvertToBRLService } from 'src/app/services/convert-to-brl.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  money: number = 999999.99;

  level: number = 10;
  currentXP: number = 12;
  maxXP: number = 100;

  constructor(private conversionService: ConvertToBRLService) {}

  ngOnInit(): void {}

  convert(): string {
    return this.conversionService.convertToBRL(this.money);
  }
}
