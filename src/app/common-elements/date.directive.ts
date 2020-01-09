import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor() { }

  @HostListener('mauseenter')
  mouseenter(eventDate: Event) {
    console.log('mouseenter');

  }

}
