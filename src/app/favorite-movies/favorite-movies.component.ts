import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  @Input()
  filmsFavorite: Array<string> = [];
  @Output()
  emitRemove = new EventEmitter<string>();

  // movieService: any;
  // films: any;

  constructor() { }

  ngOnInit() {
  }

  remove(filmId: string) {
    this.filmsFavorite = this.filmsFavorite.filter(e => e !== filmId);
    console.log(this.remove);
  }

}

