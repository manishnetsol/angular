import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import {Word} from '../word';

import { WordService } from '../word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words : Word[]; 

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords():void{

    this.wordService.getWords().subscribe(data=>{
      
      //showing the data randomly on the home screen. 
      this.words = data.sort(function() {
        return .5 - Math.random();
      }).slice(0,20);

    });

  }
}
