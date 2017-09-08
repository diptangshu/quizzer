import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  @Input() active: string;

  constructor() { }

  ngOnInit() {
  }

}
