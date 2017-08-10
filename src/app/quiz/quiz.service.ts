import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { QuizQuestion } from './quiz-question/quiz-question';

import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  private url = 'api/questions';

  constructor(private http: Http) { }

  getQuestion(id: number) {
    return this.http.get(`${this.url}/${id}`)
      .map(response => response.json())
      .map(data => Object.assign(new QuizQuestion, data.data));
  }

}
