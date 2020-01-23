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

  constructor() { }

  ngOnInit() {
  }

  remove(filmsFavorite: string) {
    this.emitRemove.emit(filmsFavorite);
    console.log(this.remove);
  }

}

