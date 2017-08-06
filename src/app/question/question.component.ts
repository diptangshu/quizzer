import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: any;
  flagged: boolean = true;

  constructor() { }

  ngOnInit() {
    this.question = {
      sequence: 5,
      body: `
        <pre class="line-numbers"><code class="language-xml">&lt;person&gt;Some xml code&lt;/person&gt;</code></pre>
        <img class="ui bordered centered rounded image" src="http://lorempixel.com/600/400" alt="some image"/>
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
    };
  }

  toggleFlag() { this.flagged = !this.flagged; }
}
