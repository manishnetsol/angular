import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchVowels'
})
export class FetchVowelsPipe implements PipeTransform {

  transform(value: string): string {
    let newStr: string = "";
    let vowels: string[] = ['a', 'e', 'i','o','u'];

    for (var i = 0; i <value.length; i++) {
      if(vowels.some(x=>x==value.charAt(i))){
        newStr += value.charAt(i);
      }
    }
    return newStr;
  }

}
