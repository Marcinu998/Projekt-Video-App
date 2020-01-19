import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBaseComponent } from './movie-base.component';

describe('MovieBaseComponent', () => {
  let component: MovieBaseComponent;
  let fixture: ComponentFixture<MovieBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
