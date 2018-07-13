import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { SearchComponent } from './search/search.component';
import { SynonymComponent } from './synonym/synonym.component';
import { FetchVowelsPipe } from './fetch-vowels.pipe';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    WordDetailComponent,
    SearchComponent,
    SynonymComponent,
    FetchVowelsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
