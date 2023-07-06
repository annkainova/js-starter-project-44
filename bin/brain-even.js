#!/usr/bin/env node
import {
  welcome,
  name,
  hello,
  getRandomNumber,
  getQuestion,
  getAnswer,
  getUncorrectAnswer,
  getCongrat,
} from './index.js';

welcome();
const userName = name();

hello();
console.log(userName);

// Описание игры
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index++) {
    const randomNum = getRandomNumber();

    getQuestion();
    console.log(randomNum);
    const result = randomNum % 2 === 0 ? 'yes' : 'no';

    const userAnswer = getAnswer();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      getUncorrectAnswer(userAnswer, result, userName);
      break;
    } else if (result !== userAnswer) {
      getUncorrectAnswer(userAnswer, result, userName);
      break;
    }
    count++;
    console.log('Correct!');
  }

  if (count === 3) {
    getCongrat(userName);
  }
};

checkCorrect();
