import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// In memory data service configuration.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizProgressComponent } from './quiz/quiz-progress/quiz-progress.component';
import { QuizReviewComponent } from './quiz/quiz-review/quiz-review.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { AlphabetPipe } from './pipes/alphabet.pipe';
import { WordPipe } from './pipes/word.pipe';
import { TimerComponent } from './timer/timer.component';
import { PaddingPipe } from './pipes/padding.pipe';

import { QuizService } from './quiz/quiz.service';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { QuizListPendingComponent } from './quiz/quiz-list/quiz-list-pending.component';
import { QuizListCompletedComponent } from './quiz/quiz-list/quiz-list-completed.component';

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
    PaddingPipe,
    QuizComponent,
    QuizReviewComponent,
    QuizListComponent,
    ProfileComponent,
    HomeComponent,
    QuizListPendingComponent,
    QuizListCompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
