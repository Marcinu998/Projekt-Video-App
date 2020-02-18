import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})

export class MyMoviesComponent implements OnInit {

  sorts = ['Najstarsze filmy', 'Ostatnio dodane filmy'];

  @Input()
  filmsRemove: Array<string> = [];

  @Input()
  Films = [];
  @Output()
  emitRemoveAll = new EventEmitter<string>();
  @Output()
  emitSortFilm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeAll(filmsRemove: string) {
    this.emitRemoveAll.emit(filmsRemove);
    console.log(this.removeAll);
  }

  sortFilm(val: string) {
    this.emitSortFilm.emit(val);
  }
}
