import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: true
})
export class FormatPipe implements PipeTransform {

  transform(phone: string, ...args: unknown[]): string|null {

    if (phone=="") return null
    const number=phone.substring(0,3)
  
   const result=`+57 (${number}) ${phone.substring(3,6)} ${phone.substring(6,10)} `
   return result
  }

}
