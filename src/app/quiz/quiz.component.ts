import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  active: boolean;

  constructor() { }

  ngOnInit() {
    this.active = true;
  }

  timeUp() {
    this.active = false;
    alert('Time to stop!');
  }

}
