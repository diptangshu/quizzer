import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import { MODULE_DEF } from '../../module-def';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(MODULE_DEF).compileComponents();
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
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return false when no correct answer is provided for question', () => {
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return false when only one correct answer', () => {
      component.question.answer.correct = [0];
      expect(component.hasMultipleAnswers()).toBeFalsy();
    });

    it('should return true when multiple correct answer', () => {
      component.question.answer.correct = [0, 1];
      expect(component.hasMultipleAnswers()).toBeTruthy();
    });
  });

});
