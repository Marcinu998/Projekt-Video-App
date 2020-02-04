import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

// import { formatDate } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  toggle: true;
  display = 'list';

  @Input()
  films = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitFavorite = new EventEmitter<string>();
  filmsFavorite: any;

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.films.push(`film ${i}`);
    }
  }

  ngOnInit() {
  }
  toggleView(change: MatButtonToggleChange) {
    this.toggle = change.value;
  }
  setDisplay(display: 'grid' | 'list'): void {
    this.display = display;
  }

  remove(film: string) {
    this.emitRemove.emit(film);
  }
  favorite(film: string) {
    this.emitFavorite.emit(film);
    console.log(this.favorite);
  }

}
