import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCoursesComponent } from './learn-courses.component';

describe('LearnCoursesComponent', () => {
  let component: LearnCoursesComponent;
  let fixture: ComponentFixture<LearnCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
