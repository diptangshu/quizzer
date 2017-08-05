import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
