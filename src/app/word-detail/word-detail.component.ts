import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Word} from '../word';

import { WordService } from '../word.service';



@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  
  @Input() word : Word; 

  constructor(private route: ActivatedRoute,
    private wordService: WordService) { }

  ngOnInit(): void {

    
   this.route
    .params
    .subscribe(params => {
      this.getWord();
    }); 

    this.getWord();
    
  }

  getWord():void{

    // get the name from the route snapshot. 
    const name = this.route.snapshot.paramMap.get('name');
    this.wordService.getWord(name)
          .subscribe(word => this.word = word);
          
  }

}
