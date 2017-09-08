import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListPendingComponent } from './quiz-list-pending.component';

describe('QuizListPendingComponent', () => {
  let component: QuizListPendingComponent;
  let fixture: ComponentFixture<QuizListPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizListPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
