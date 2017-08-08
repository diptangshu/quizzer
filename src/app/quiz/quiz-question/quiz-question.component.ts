import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

  question: any;
  flagged: boolean = true;
  loading: boolean = true;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.loading = true;
    this.quizService.getQuestionSlowly(0).then(question => {
      this.question = question;
      this.loading = false;
    });
  }

  toggleFlag() { this.flagged = !this.flagged; }
}
