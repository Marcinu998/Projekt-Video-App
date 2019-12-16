import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  @Input()
  tasksFavorite: Array<string> = [];
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(task: string) {
    this.emitRemove.emit(task);
  }

}
