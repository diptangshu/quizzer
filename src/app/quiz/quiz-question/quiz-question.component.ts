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

  hasMultipleAnswers(): boolean {
    // TODO Refactor logic to domain class Question.
    if (!this.question) return false;

    if (!this.question.answer) {
      console.error('No answer choices specified with question!');
      return false;
    }

    if (!this.question.answer.correct) {
      console.error('No correct answer specified with question!');
      return false;
    }

    return this.question.answer.correct.length > 1;
  }
}
