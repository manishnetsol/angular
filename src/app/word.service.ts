import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Word } from './word';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'https://app-1531460466.000webhostapp.com/';


/* const WORDS: Word[] =  [
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
  ]; */

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor( private http: HttpClient) { }

   /** GET heroes from the server */
    getWords (): Observable<Word[]> {
    return this.http.get<Word[]>(`${url}getalldata`);

  }

   /* getWords(): Word[] {
    return WORDS;
   } */

  getWord(name: string): Observable<Word>  {
    

    return this.http.get<Word>(`${url}getdata/${name}`);
  
  }

}
