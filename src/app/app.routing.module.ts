import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/removeFilms',
    pathMatch: 'full'
  },
  {
    path: 'removeFilms',
    component: MyMoviesComponent
  },
  {
    path: 'favoriteMovies',
    component: FavoriteMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
function newFunction(): string {
  return 'favoriteMovies';
}

