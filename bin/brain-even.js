#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log(`Welcome to the Brain Games!`);

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(`Answer "yes" if the number is even, otherwise answer "no".
`);

let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index++) {
    const randomNumber = Math.round(Math.random() * 100);
    const result = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(`Your answer: `);

    if (answer !== 'yes' && answer !== 'no') {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${result}".Let's try again, ${name}!`
      );
      break;
    } else if (result !== answer) {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${result}".Let's try again, ${name}!`
      );
      break;
    }
    count++;
    console.log('Correct!');
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

checkCorrect();
