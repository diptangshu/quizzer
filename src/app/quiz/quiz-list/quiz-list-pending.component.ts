import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list-pending',
  templateUrl: './quiz-list-pending.component.html',
  styleUrls: ['./quiz-list-pending.component.css']
})
export class QuizListPendingComponent implements OnInit {

  quizzes: any[];
  loaded: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loaded = false;
    this.quizService.getPendingQuizzes().subscribe(
      quizzes => this.quizzes = quizzes,
      (err) => console.error(err),
      () => this.loaded = true
    );
  }

}
