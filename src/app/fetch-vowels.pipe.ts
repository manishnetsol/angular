import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchVowels'
})
export class FetchVowelsPipe implements PipeTransform {

  transform(value: string): string {
    let newStrArr: string[] = [];
    let vowels: string[] = ['a', 'e', 'i','o','u'];

    if(typeof value !="undefined"){
    for (var i = 0; i <value.length; i++) {
      var char = value.charAt(i).toLowerCase();
      if(vowels.some(x=>x==char)){
        newStrArr.push(char);
      }
    }
    newStrArr = Array.from(new Set(newStrArr ));

    return newStrArr.join(', ');
  } else 
    return '';
  }

}
