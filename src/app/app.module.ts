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
import { MovieService } from './app.service';
import { MovieBaseComponent } from './movie-base/movie-base.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
    MovieBaseComponent,
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
