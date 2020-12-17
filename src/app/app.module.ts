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
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
