import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRevPipe', 
  standalone : true
})
export class MyRevPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // Check if value is a string
    if (typeof value !== 'string') {
      throw new Error('The input value must be a string');
    }

    // Reverse the string
    return value.split('').reverse().join('');
  }
}
