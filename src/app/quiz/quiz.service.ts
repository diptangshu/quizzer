import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { QuizQuestion } from './quiz-question/quiz-question';

import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  private url_questions = 'api/questions';
  private url_quizzes_pending = 'api/quizzes_pending';
  private url_quizzes_completed = 'api/quizzes_completed';

  constructor(private http: Http) { }

  getQuestion(id: number) {
    return this.http.get(`${this.url_questions}/${id}`)
      .map(response => response.json())
      .map(data => Object.assign(new QuizQuestion, data.data));
  }

  getPendingQuizzes() {
    return this.http.get(this.url_quizzes_pending)
      .map(response => response.json().data);
  }

  getCompletedQuizzes() {
    return this.http.get(this.url_quizzes_completed)
      .map(response => response.json().data);
  }

}
