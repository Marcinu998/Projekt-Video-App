import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-base',
  templateUrl: './movie-base.component.html',
  styleUrls: ['./movie-base.component.css']
})
export class MovieBaseComponent implements OnInit {

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
