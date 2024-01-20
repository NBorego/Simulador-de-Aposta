import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL'
})
export class CurrencyBRLPipe implements PipeTransform {
  transform(money: number): string {
    return money.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
