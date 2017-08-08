import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizProgressComponent } from './quiz/quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { AlphabetPipe } from './pipes/alphabet.pipe';
import { WordPipe } from './pipes/word.pipe';
import { TimerComponent } from './timer/timer.component';
import { PaddingPipe } from './pipes/padding.pipe';

import { QuizService } from './quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    QuizProgressComponent,
    QuizQuestionComponent,
    AlphabetPipe,
    WordPipe,
    TimerComponent,
    PaddingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
