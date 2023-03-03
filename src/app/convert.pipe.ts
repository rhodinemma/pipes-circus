import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return '';
    }
    // convert miles to kilometers
    return value * 1.60934;
  }

}
