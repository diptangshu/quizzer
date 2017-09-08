import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list-completed',
  templateUrl: './quiz-list-completed.component.html',
  styleUrls: ['./quiz-list-completed.component.css']
})
export class QuizListCompletedComponent implements OnInit {

  quizzes: any[];
  loaded: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loaded = false;
    this.quizService.getCompletedQuizzes().subscribe(
      quizzes => this.quizzes = quizzes,
      (err) => console.error(err),
      () => this.loaded = true
    );
  }
}
