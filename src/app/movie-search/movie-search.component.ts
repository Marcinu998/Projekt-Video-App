import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  newFilm: [];
  @Output()
  emitFilm = new EventEmitter();




  constructor() { }

  ngOnInit() {
  }

  add() {
    // const film = { ...this.newFilm, createdAt: new Date().toLocaleDateString() };
    // console.log(this.createdAt);
    // const film = { createdAt: new Date().toLocaleDateString() };
    // console.log(this.createdAt);
    // this.createdAt.toLocaleDateString();
    // console.log(this.createdAt);
    this.emitFilm.emit(this.newFilm);
    this.newFilm = [];
    console.log(this.emitFilm);
  }
}
