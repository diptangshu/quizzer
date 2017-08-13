import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() duration: number = 0; // in seconds
  @Output() expired = new EventEmitter();

  timeLeft: number;
  active: boolean;

  hours: number;
  minutes: number;
  seconds: number;

  timerInterval: any;
  iconStates = ['end', 'half', 'start'];
  iconStateInactive = 'empty';
  iconState:string;

  constructor() { }

  ngOnInit() {
    if (this.duration <= 0) return;

    this.active = true;
    this.timeLeft = this.duration;
    this.refresh();

    this.timerInterval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // Decreases time by 1 second. Returns false if no time left.
  tick(): boolean {
    if (this.timeLeft == 0) {
      clearInterval(this.timerInterval);
      this.expired.emit();
      this.active = false;
      this.computeIconState();
      return false;
    }

    this.timeLeft--;
    this.refresh();
    return true;
  }

  refresh() {
    let t = this.timeLeft * 1000;
    this.seconds  = Math.floor((t / 1000) % 60);
    this.minutes  = Math.floor((t / (1000 * 60)) % 60);
    this.hours    = Math.floor((t / (1000 * 60 * 60)) % 24);

    this.computeIconState();
  }

  computeIconState() {
    if (!this.active) {
      this.iconState = this.iconStateInactive;
      return;
    }

    let progress = this.duration === 0? 0 : this.timeLeft / this.duration;
    this.iconState = this.iconStates[
      Math.round(this.lerp(0, this.iconStates.length - 1, progress))
    ];
  }

  // Linearly interpolate between numbers a and b using amount (0.0 to 1.0)
  lerp(a: number, b: number, amount: number) {
    amount = amount < 0? 0 : amount;
    amount = amount > 1? 1 : amount;
    return a + (b - a) * amount;
  }

}
