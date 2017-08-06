import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padding'
})
export class PaddingPipe implements PipeTransform {

  transform(value: any, length: number = 0, char: string = ' '): string {
    let str = '' + value;
    let pad:string = Array(length + 1).join(char.charAt(0));
    return pad.substring(0, pad.length - str.length) + str;
  }

}
