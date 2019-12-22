import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ListViewComponent } from './list-view/list-view.component';
import { MovieService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
    ListViewComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
