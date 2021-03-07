import { NgModule, LOCALE_ID  } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { EurosPipe } from './pipes/euros.pipe';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { EurosByM2Pipe } from './pipes/euros-by-m2.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [LocalDatePipe, EurosPipe, EurosByM2Pipe],
  imports: [
    CommonModule
  ],
  exports: [
    LocalDatePipe,
    EurosPipe,
	EurosByM2Pipe
  ],
  providers:    [ 
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
   ]
})
export class CoreModule { }
