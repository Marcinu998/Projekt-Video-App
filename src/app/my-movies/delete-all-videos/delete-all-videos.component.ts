import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-all-videos',
  templateUrl: './delete-all-videos.component.html',
  styleUrls: ['./delete-all-videos.component.css']
})
export class DeleteAllVideosComponent implements OnInit {

  @Input()
  filmsRemove: Array<string> = [];
  @Output()
  emitRemove = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
  // remove(film: string) {
  //   this.filmsRemove = this.filmsRemove.filter(e => e !== film);
  //   console.log(this.remove);
  // }
  remove(filmId: string) {
    this.emitRemove.emit(filmId);
    console.log(this.remove);
  }
}
