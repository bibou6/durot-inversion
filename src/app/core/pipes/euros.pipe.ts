import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {

  constructor(private _currencyPipe: CurrencyPipe) {
  }

  transform(value: number, ...args: unknown[]): string {
    return this._currencyPipe.transform(value,'EUR','symbol','1.2-2','fr-FR');
  }

}
