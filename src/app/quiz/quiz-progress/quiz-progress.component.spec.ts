import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';
import { TimerComponent } from '../../timer/timer.component';

import { PaddingPipe } from '../../pipes/padding.pipe';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // components
        QuizProgressComponent,
        TimerComponent,
        // pipes
        PaddingPipe
      ]
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
