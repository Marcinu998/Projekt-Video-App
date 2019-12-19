import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllVideosComponent } from './delete-all-videos.component';

describe('DeleteAllVideosComponent', () => {
  let component: DeleteAllVideosComponent;
  let fixture: ComponentFixture<DeleteAllVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
