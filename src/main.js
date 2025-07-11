import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//
import { sumTwoSmallestNumbers } from './exercises/sumTwoSmallestNumbers.js';
import { likes } from './exercises/likes.js';
import { getSumBetween } from './exercises/getSumBetween.js';
import { isPangram } from './exercises/isPangram.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

console.log('sumTwoSmallestNumbers:' , sumTwoSmallestNumbers([1, 1, 2, 3]))
console.log('likes:', likes(['John', 'Jane', 'Jack']))
console.log('getSumBetween:', getSumBetween(-1, 2))
console.log('isPangram:', isPangram('The quick brown fox jumps over the lazy dog'))


