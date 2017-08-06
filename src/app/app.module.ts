import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuestionComponent } from './question/question.component';
import { AlphabetPipe } from './pipes/alphabet.pipe';
import { WordPipe } from './pipes/word.pipe';
import { TimerComponent } from './timer/timer.component';
import { PaddingPipe } from './pipes/padding.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    QuizProgressComponent,
    QuestionComponent,
    AlphabetPipe,
    WordPipe,
    TimerComponent,
    PaddingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
