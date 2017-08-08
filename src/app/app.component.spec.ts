import { TestBed, async } from '@angular/core/testing';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizProgressComponent } from './quiz/quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { TimerComponent } from './timer/timer.component';

import { AlphabetPipe } from './pipes/alphabet.pipe';
import { PaddingPipe } from './pipes/padding.pipe';
import { WordPipe } from './pipes/word.pipe';

import { QuizService } from './quiz/quiz.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        AppComponent,
        FooterComponent,
        TimerComponent,
        TopNavComponent,
        QuizQuestionComponent,
        QuizProgressComponent,
        // Pipes
        AlphabetPipe,
        PaddingPipe,
        WordPipe
      ],
      imports: [
        NgSemanticModule
      ],
      providers: [
        QuizService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
