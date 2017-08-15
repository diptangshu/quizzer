import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { QuizService } from '../quiz.service';
import { QuizQuestion } from './quiz-question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

  @Input() active: boolean;
  @Input() currentId: number;

  @Output() review = new EventEmitter();

  question = new QuizQuestion();
  flagged: boolean;
  loaded: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.load();
  }

  toggleFlag() { this.flagged = !this.flagged; }

  hasMultipleAnswers(): boolean {
    return this.question.hasMultipleAnswers();
  }

  hasNext(): boolean {
    return this.question.hasNext();
  }

  submit() {
    if (!this.active) return;

    if (this.next()) {
      this.load();
    }
  }

  gotoReview() {
    this.review.emit();
  }

  private load() {
    if (!this.currentId) return;

    this.loaded = false;
    this.quizService.getQuestion(this.currentId).subscribe(
      question => this.question = question,
      (err) => console.error(err.json().error),
      () => this.loaded = true
    );
  }

  private next(): boolean {
    if (!this.hasNext()) return false;
    this.currentId = this.question.next;
    return true;
  }

}
