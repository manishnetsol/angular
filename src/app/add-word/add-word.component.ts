import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  model = { name: '', meaning: '' };

  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  userSubmit() {
    
    this.wordService.addWord(this.model);
    //this.model.firstname = ‘’;
    //this.model.lastname = ‘’;
    //this.model.mobile_no = ‘’;
    }

}


