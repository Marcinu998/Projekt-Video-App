import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Movie } from './app.interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  films: Movie[] = [];
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  public add(filmId: string) {
    // i6MBmO2HP3w
    const key = 'AIzaSyDIO28DsqeiOKyuNJeVc0dLVnx6LUdYz_U';
    // tslint:disable-next-line: max-line-length
    const responseObservable = this.httpClient.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${filmId}&key=${key}`);
    responseObservable.pipe( // how to send query params in agular
      take(1),
    ).subscribe((res: any) => {
      console.log('x: ', res);
      if (!res || !res.items || res.items.length === 0) { console.error('no movie'); return; }
      const newFilm = {
        id: filmId,
        title: res.items[0].snippet.title,
        src: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${filmId}`),
      };
      this.films.push(newFilm);
    });
  }

  public remove(filmId: string) {
    this.films = this.films.filter(film => film.id !== filmId);
  }

  public getFilms(): any[] {
    return this.films;
  }

}
