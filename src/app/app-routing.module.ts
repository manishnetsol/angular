import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {WordDetailComponent} from './word-detail/word-detail.component';

const routes: Routes = [
  {path:'', redirectTo: '/home',pathMatch:'full'},
  {path:'home', component:HomeComponent },
  { path: 'word-detail/:name', component: WordDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
