import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})

export class MyMoviesComponent implements OnInit {

  message = new TemplateMessage();
  sorts = ['Najstarsze filmy', 'Ostatnio dodane filmy'];

  @Input()
  filmsRemove: Array<string> = [];

  @Output()
  // emitRemove = new EventEmitter<string>();
  emitRemoveAll = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // remove(filmId: string) {
  //   this.emitRemove.emit(filmId);
  //   console.log(this.remove);
  // }
  removeAll(filmsRemove: string) {
    this.emitRemoveAll.emit(filmsRemove);
    console.log(this.removeAll);
  }
}
class TemplateMessage {
  constructor(
    public sort = '',
  ) { }
}
