import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizProgressComponent } from './quiz/quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { TimerComponent } from './timer/timer.component';

import { AlphabetPipe } from './pipes/alphabet.pipe';
import { PaddingPipe } from './pipes/padding.pipe';
import { WordPipe } from './pipes/word.pipe';

import { QuizService } from './quiz/quiz.service';

export const MODULE_DEF = {
  declarations: [
    // Components
    AppComponent,
    FooterComponent,
    TimerComponent,
    TopNavComponent,
    QuizComponent,
    QuizQuestionComponent,
    QuizProgressComponent,
    // Pipes
    AlphabetPipe,
    PaddingPipe,
    WordPipe
  ],
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    QuizService
  ]
};
