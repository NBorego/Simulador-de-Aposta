import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {
  public money: number;
  public level: number;
  public currentXP: number;
  public maxXP: number;

  constructor() {
    this.money = 0;
    this.level = 4;
    this.currentXP = 90;
    this.maxXP = 100;
  }
}
