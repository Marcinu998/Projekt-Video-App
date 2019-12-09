import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoApp';
  newTask: string;
  tasksList: Array<string> = [];
  tasksFavorite: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  favorite(task: string) {
    this.tasksFavorite.push(task);
    this.remove(task);

  }

}
