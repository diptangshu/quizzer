import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {
        id: 1,
        next: 2,
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
        hint: 'The value passed in String.format() is...',
        answer: {
          choices: [ 'Diptangshu', 'Zubin', 'Diptchak', 'Guitarman'],
          correct: [0, 1]
        }
      },
      {
        id: 2,
        body: `Some text goes here...`,
        answer: {
          choices: [ 'Diptangshu', 'Zubin', 'Diptchak'],
          correct: [1]
        }
      }
    ];
    return {questions};
  }
}
