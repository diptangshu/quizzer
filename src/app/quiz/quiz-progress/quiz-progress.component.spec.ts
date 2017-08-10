import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';
import { MODULE_DEF } from '../../module-def';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(MODULE_DEF).compileComponents();
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
