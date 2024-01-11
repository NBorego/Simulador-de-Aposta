import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertToBRLService {
  constructor() {}

  convertToBRL(money: number): string {
    return money.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
