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
    this.money = 999999;
    this.level = 1;
    this.currentXP = 0;
    this.maxXP = 100;
  }
}
