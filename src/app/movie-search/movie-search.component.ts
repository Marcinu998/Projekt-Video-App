import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewFilmData } from '../app.interfaces';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  demoFilms = [];
  newFilm: string;

  @Output()
  emitFilm = new EventEmitter<NewFilmData>();
  @Output()
  emitLoadDemo = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  load() {
    console.log('xxx');
    this.emitLoadDemo.emit();
  }

  add() {
    console.log('this.newFilm: ', this.newFilm);
    const newFilmData = this.parseUserInput(this.newFilm);
    this.emitFilm.emit(newFilmData);
    this.newFilm = '';
  }

  parseUserInput(userInput: string): NewFilmData {
    // sprawdzić czy w userInput jest 'youtube'
    // jeśli tak to type = youtube
    // sprawdzić czy w userInput jest 'vimeo'
    // jeśli tak to vimeo
    // jeśli w obu nie, to sprawdźić czy to id jest numerem ( sprawdźić czy +userInput === NaN jesli tak to to jest youtube)
    // mam type

    // wyjąć id z userInput
    // how do i get the youtube video id from url

    return {
      type: 'youtube',
      id: userInput,
    };
  }
}
