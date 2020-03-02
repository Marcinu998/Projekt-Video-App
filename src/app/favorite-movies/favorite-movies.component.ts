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
  emitRemoveFromFavorite = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeFromFavorite(films: string) {
    this.emitRemoveFromFavorite.emit(films);
    console.log(this.removeFromFavorite);
  }
  // remove(film: string) {
  //   this.emitRemoveFavorite.emit(film);
  //   console.log(this.remove);
  // }

}

