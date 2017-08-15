import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  active: boolean;
  duration: number = 600;
  currentQuestionId = 1;
  reviewHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    this.active = true;
  }

  timeUp() {
    this.active = false;
    alert('Time to stop!');
  }

  showReview() { this.reviewHidden = false; }

}
