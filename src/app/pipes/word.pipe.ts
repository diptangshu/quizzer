import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {

  words = [
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten'
  ];

  transform(number: number): string {
    return (number > 0 && number < this.words.length)? this.words[number - 1]: '';
  }

}
