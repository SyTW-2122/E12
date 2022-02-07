import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSketchComponent } from './film-sketch.component';

describe('FilmSketchComponent', () => {
  let component: FilmSketchComponent;
  let fixture: ComponentFixture<FilmSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSketchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
