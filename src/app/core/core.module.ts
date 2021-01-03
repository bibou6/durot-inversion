import { NgModule, LOCALE_ID  } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { EurosPipe } from './pipes/euros.pipe';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [LocalDatePipe, EurosPipe],
  imports: [
    CommonModule
  ],
  exports: [
    LocalDatePipe,
    EurosPipe
  ],
  providers:    [ 
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
   ]
})
export class CoreModule { }
