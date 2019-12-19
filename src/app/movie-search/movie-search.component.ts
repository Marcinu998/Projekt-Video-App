import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
    console.log(this.emitTask);
  }
}
