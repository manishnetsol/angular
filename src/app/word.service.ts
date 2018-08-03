import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'; 
import { AngularFireAuth } from 'angularfire2/auth'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Word } from './word';


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

  constructor( private http: HttpClient,
               private afauth: AngularFireAuth, 
               private db: AngularFirestore) { }

   /** GET heroes from the server */
    getWords (): Observable<Word[]> {
    
    return this.db.collection<Word>('words').valueChanges();

  }

  getWord(name: string) : Observable<Word[]>  {
    
   return this.db.collection<Word>('words', ref => ref.where('name', '==', name)).valueChanges();

  }

  getSearchWord(name: string) : Observable<Word[]>  {
    
    //return this.db.collection<Word>('words', ref => ref.where('name', '==', 'A')).valueChanges();
    return this.db.collection<Word>('words', ref =>ref.orderBy('name').startAt(name).endAt(name+'\uf8ff')).valueChanges();
   // return this.db.collection<Word>('words', ref => ref.orderBy('name').limit(5).startAt(start).endAt(end));
   // return this.db.collection<Word>('words').valueChanges();
 
   }

   addWord(word)  {
    word.name = word.name.charAt(0).toUpperCase() + word.name.slice(1);
    return this.db.collection<Word>('words').add(word);

    //console.log(word);
    //return this.db.collection<Word>('words', ref => ref.where('name', '==', name)).valueChanges();
 
   }


}
