import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {
        id: 1,
        next: 2,
        body: `
          <pre class="line-numbers"><code class="language-xml">&lt;person&gt;Some xml code&lt;/person&gt;</code></pre>
          <img class="ui bordered centered rounded image" src="//lorempixel.com/600/400" width="600" height="400" alt="some image"/>
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

    const quizzes_pending = [
      {
        id: 1,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquam lacus, eu lobortis erat. Aliquam ac hendrerit quam. Aenean imperdiet hendrerit maximus.',
        thumbnail: '//lorempixel.com/100/100',
        time: 3600,
        totalQuestions: 10,
        cuttoffPercent: 60
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquam lacus, eu lobortis erat. Aliquam ac hendrerit quam. Aenean imperdiet hendrerit maximus.',
        thumbnail: '//lorempixel.com/100/100',
        time: 3600,
        totalQuestions: 50,
        cuttoffPercent: 35
      }
    ];

    const quizzes_completed = [
      {
        id: 1,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquam lacus, eu lobortis erat. Aliquam ac hendrerit quam. Aenean imperdiet hendrerit maximus.',
        thumbnail: '//lorempixel.com/100/100',
        result : {
          winner: false,
          passed: true,
          score: 82
        }
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquam lacus, eu lobortis erat. Aliquam ac hendrerit quam. Aenean imperdiet hendrerit maximus.',
        thumbnail: '//lorempixel.com/100/100',
        result : {
          winner: true,
          passed: true,
          score: 68
        }
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquam lacus, eu lobortis erat. Aliquam ac hendrerit quam. Aenean imperdiet hendrerit maximus.',
        thumbnail: '//lorempixel.com/100/100',
        result : {
          winner: false,
          passed: false,
          score: 32
        }
      }
    ];
    return {questions, quizzes_pending, quizzes_completed };
  }
}
