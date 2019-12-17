import { Component, OnInit } from '@angular/core';
import { MovieService } from './app.service';
import { Movie } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VideoApp';
  films: Movie[] = [];
  tasksFavorite: Array<string> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.films = this.movieService.getFilms();
  }


  add(filmId: string) {
    this.movieService.add(filmId);
    this.films = this.movieService.getFilms();
  }

  remove(filmId: string) {
    this.movieService.remove(filmId);
    this.films = this.movieService.getFilms();
  }

  favorite(task: string) {
    this.tasksFavorite.push(task);
    this.remove(task);
  }

  // removeFavourite(filmId: Film) {
  //   this.tasksFavorite = this.tasksFavorite.filter(film => film.id !== filmId);
  // }
}
