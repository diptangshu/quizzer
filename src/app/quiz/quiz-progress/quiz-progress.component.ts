import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {

  @Input() time = 10; // seconds
  @Output() timeUp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hasExpired() {
    this.timeUp.emit();
  }

}
