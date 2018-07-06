import { Injectable } from '@angular/core';
import { Word } from './word';
//import { Observable, of } from 'rxjs';


const WORDS: Word[] =  [
    { name: 'abase', meaning: 'Cause to feel shame; hurt the pride of' },
    { name: 'acme', meaning: 'The highest level or degree attainable; the highest stage of development' },
    { name: 'anonymous', meaning: 'Having no known name, identity or known source' },
    { name: 'abate', meaning: 'Make less active or intense' },
    { name: 'adamant', meaning: 'Impervious to pleas, persuasion, requests, reason' },
    { name: 'antipathy', meaning: 'A feeling of intense dislike' },
    { name: 'adorable', meaning: 'Lovable especially in a childlike or naive way' },
    { name: 'asinine', meaning: 'Showing a lack of intelligence or thought; stupid and silly' },
    { name: 'aberrant', meaning: 'Markedly different from an accepted norm' },
    { name: 'aegis', meaning: 'Kindly endorsement and guidance' },
    { name: 'assuage', meaning: 'Cause to be more favorably inclined; gain the good will of' },
    { name: 'agape', meaning: 'With the mouth wide open as in wonder or awe' },
    { name: 'avarice', meaning: 'Reprehensible acquisitiveness; insatiable desire for wealth (personified as one of the deadly sins)' },
    { name: 'agnostic', meaning: 'Someone who is doubtful or noncommittal about something' },
    { name: 'abscission', meaning: 'Shedding of flowers and leaves and fruit following formation of scar tissue in a plant' }
  ];

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getWords(): Word[] {
    return WORDS;
  }

  getWord(name: string): Word  {
    
    for (let [k, word] of Object.entries(WORDS)) {

      if(word.name == name){
        return word;
      }
    }
    
    
  }


  /* getWord(name: string): Observable<Word> {
    return of(WORDS.find(word => word.name === name));
  } */



}
