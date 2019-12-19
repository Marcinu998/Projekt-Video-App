import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  films = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitFavorite = new EventEmitter<string>();
  filmsFavorite: any;


  constructor() { }

  ngOnInit() {
  }

  remove(film: string) {
    this.emitRemove.emit(film);
  }
  favorite(film: string) {
    this.emitFavorite.emit(film);
    console.log(this.favorite);
  }
}
