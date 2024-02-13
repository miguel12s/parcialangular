import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone: true
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    
    return null;
  }

}
