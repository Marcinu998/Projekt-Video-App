import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  // filmsRemoveFavorite: Array<string> = [];

  @Input()
  filmsFavorite: Array<string> = [];
  @Input()
  films = [];
  @Output()
  emitRemoveFavorite = new EventEmitter<string>();
  // @Output()
  // removeFilmsFavorite: Array<string>[];

  constructor() { }

  ngOnInit() {
  }

  // removeFavorite(filmsRemoveFavorite: string) {
  //   this.emitRemoveFavorite.emit(filmsRemoveFavorite);
  //   console.log(this.removeFavorite);
  // }
  remove(film: string) {
    this.emitRemoveFavorite.emit(film);
    console.log(this.remove);
  }

}

