import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//
import { sumTwoSmallestNumbers } from './exercises/sumTwoSmallestNumbers.js';
import { likes } from './exercises/likes.js';
import { getSumBetween } from './exercises/getSumBetween.js';
import { isPangram } from './exercises/isPangram.js';
import { spinWords } from './exercises/spinWords.js';
import { findOdd } from './exercises/findOdd.js';
import { twoSum } from './exercises/twoSum.js';
import { pairInArray } from './exercises/pairInArray.js';
import { humanReadableTime } from './exercises/humanReadableTime.js';
import { countRepeated } from './exercises/countRepeated.js';
import { domainName } from './exercises/domainName.js';
import { sumBigStringNumbers } from './exercises/sumBigStringNumbers.js';
import { alphanumeric } from './exercises/alphanumeric.js';
import { formatDuration } from './exercises/formatDuration.js';
import { incrementString } from './exercises/incrementString.js';

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
console.log('spinWords:', spinWords('He is the Hollow Knight'))
console.log('findOdd:', findOdd([0,1,0]))//1
console.log('twoSum:', twoSum([1, 2, 3], 4))//[0, 2] or [2, 0]
console.log('pairInArray:', pairInArray('abc'))//['ab', 'c_']
console.log('humanReadableTime:', humanReadableTime(71465))//19:51:05
console.log('countRepeated:', countRepeated('aba'))//{'a': 2, 'b': 1}
console.log('domainName:', domainName('http://github.com/carbonfive/raygun'))//github
console.log('sumBigStringNumbers:', sumBigStringNumbers('712569312664357328695151392','8100824045303269669937'))//712577413488402631964821329
console.log('alphanumeric:', alphanumeric('abc123'))//true
console.log('formatDuration:', formatDuration(62))//1 minute and 2 seconds
console.log('incrementString:', incrementString('fo91obar91'))//fo91obar92

