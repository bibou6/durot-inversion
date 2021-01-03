import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return formatDate(value,'dd-MM-yyyy','en-US');
  }

}
