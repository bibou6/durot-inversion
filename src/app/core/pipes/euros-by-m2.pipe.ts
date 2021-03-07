import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurosByM2'
})
export class EurosByM2Pipe implements PipeTransform {

	constructor(private _currencyPipe: CurrencyPipe) {
	}
  
	transform(value: number, ...args: unknown[]): string {
		if(value != null){
			return this._currencyPipe.transform(value,'EUR','symbol','1.2-2','fr-FR') + '/m²';
		}else{
			return '';
		}
	}

}
