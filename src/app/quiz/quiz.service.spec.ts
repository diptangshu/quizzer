import { TestBed, inject } from '@angular/core/testing';

import { QuizService } from './quiz.service';
import { MODULE_DEF } from '../module-def';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(MODULE_DEF);
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
