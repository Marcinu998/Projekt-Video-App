import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoApp';
  films: Array<string> = [];
  tasksFavorite: Array<string> = [];


  add(film: string) {
    this.films.push(film);
  }

  remove(task: string) {
    this.films = this.films.filter(e => e !== task);
  }

  favorite(task: string) {
    this.tasksFavorite.push(task);
    this.remove(task);
  }
}
