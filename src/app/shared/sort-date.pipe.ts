import { Pipe, PipeTransform, Input } from '@angular/core';
import { NewFilmData } from '../app.interfaces';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {


  transform(value: Array<NewFilmData>, ...args: any[]): any {
    return value.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else {
        return -1;
      }

    });
  }

}
