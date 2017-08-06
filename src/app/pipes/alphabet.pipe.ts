import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabet'
})
export class AlphabetPipe implements PipeTransform {

  transform(index: number, charStart: string = 'a'): string {
    index = index < 0? 0: index;  // sanitize index
    let ascii = charStart.charCodeAt(0);
    return String.fromCharCode(ascii + index);
  }

}
