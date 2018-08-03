import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchkey: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchFunction(event: any){
    // redirect to the word-detail
    if(event.keyCode == '13'){
      this.searchkey = this.searchkey.charAt(0).toUpperCase() + this.searchkey.slice(1);
      this.router.navigate(['/word-detail/'+this.searchkey]);
    }
  }
}
