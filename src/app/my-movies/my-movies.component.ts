import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})

export class MyMoviesComponent implements OnInit {

  message = new TemplateMessage();
  sorts = ['Najstarsze filmy', 'Ostatnio dodane filmy'];

  ngOnInit() { }

}
class TemplateMessage {
  constructor(
    public sort = '',
  ) { }
}
