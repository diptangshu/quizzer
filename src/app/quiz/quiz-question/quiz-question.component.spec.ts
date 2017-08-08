import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import { WordPipe } from '../../pipes/word.pipe';
import { AlphabetPipe } from '../../pipes/alphabet.pipe';

import { QuizService } from '../quiz.service';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuizQuestionComponent,
        AlphabetPipe,
        WordPipe
      ],
      providers: [
        QuizService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('hasMultipleAnswers()', () => {
    it('should return false when question is empty', () => {
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return false when no answer is provided for question', () => {
      component.question = {};
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return false when no correct answer is provided for question', () => {
      component.question = { answer: {} };
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return false when only one correct answer', () => {
      component.question = { answer: { correct: [0] } };
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return true when only one correct answer', () => {
      component.question = { answer: { correct: [0, 1] } };
      expect(component.hasMultipleAnswers()).toBeTruthy();
    });
  });
});
