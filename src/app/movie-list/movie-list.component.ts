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


  constructor() { }

  ngOnInit() {
  }

  remove(task: string) {
    this.emitRemove.emit(task);
  }
  favorite(task: string) {
    this.emitFavorite.emit(task);
  }
}
