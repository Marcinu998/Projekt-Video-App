import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

// import { formatDate } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  [x: string]: any;

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.films.push(`film ${i}`);
    }
  }
  toggle: true;
  display = 'list';

  @Input()
  films = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitFavorite = new EventEmitter<string>();
  @Output()
  filmsFavorite: any;

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
    console.log(this.remove);
  }
  addToFavorite(film: string) {
    this.emitFavorite.emit(film);
    console.log(this.favorite);
  }

}

