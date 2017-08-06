import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';

import { AlphabetPipe } from './pipes/alphabet.pipe';
import { PaddingPipe } from './pipes/padding.pipe';
import { WordPipe } from './pipes/word.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        AppComponent,
        FooterComponent,
        TimerComponent,
        TopNavComponent,
        QuestionComponent,
        QuizProgressComponent,
        // Pipes
        AlphabetPipe,
        PaddingPipe,
        WordPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
