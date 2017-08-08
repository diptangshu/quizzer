import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor() { }

  getQuestion(sequence: number): Promise<any> {
    return Promise.resolve({
      sequence: 5,
      body: `
        <pre class="line-numbers"><code class="language-xml">&lt;person&gt;Some xml code&lt;/person&gt;</code></pre>
        <img class="ui bordered centered rounded image" src="http://lorempixel.com/600/400" width="600" height="400" alt="some image"/>
        <p>Some text about the following code goes here...</p>
<pre class="line-numbers"><code class="language-java">public static void main(int argc, String[] argv) {
  // code...
  int x;
}</code></pre>
        <p>Some more text...</p>
      `,
      hint: 'The vlaue passed in String.format() is...',
      answer: {
        choices: [ 'Diptangshu', 'Zubin', 'Diptchak', 'Guitarman'],
        correct: [0, 1]
      }
    });
  }

  getQuestionSlowly(sequence: number): Promise<any> {
    return new Promise(resolve => {
      // Simulate server latency
      setTimeout(() => resolve(this.getQuestion(sequence)), 2000);
    });
  }

}
