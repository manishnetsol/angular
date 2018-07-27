import { Component, OnInit  } from '@angular/core';

import {Word} from '../word';
import { Observable } from 'rxjs';
import { WordService } from '../word.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  words : Observable<Word[]>; 

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords():void{

    // get the name from the route snapshot.
    this.words = this.wordService.getWords();

  }


}
