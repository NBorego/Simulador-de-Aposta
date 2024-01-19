import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {
  public money: number = 0;
  public level: number = 1;
  public currentXP: number = 0;
  public maxXP: number = 100;
  public winner: boolean = false;
}
