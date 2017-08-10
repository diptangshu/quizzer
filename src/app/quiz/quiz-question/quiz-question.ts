export class QuizQuestion {
  id: number;
  next?: number;
  body: string;
  hint: string;
  answer = new Answer();

  hasMultipleAnswers(): boolean {
    return this.answer && this.answer.correct && this.answer.correct.length > 1;
  }

  hasNext(): boolean {
    return this.next? true: false;
  }
}

class Answer {
  choices: string[];
  correct: number[];
}
