import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListCompletedComponent } from './quiz-list-completed.component';

describe('QuizListCompletedComponent', () => {
  let component: QuizListCompletedComponent;
  let fixture: ComponentFixture<QuizListCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizListCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
