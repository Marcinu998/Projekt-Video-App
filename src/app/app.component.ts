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

  add() {
    this.tasksList.push(this.newTask);
  }

}
