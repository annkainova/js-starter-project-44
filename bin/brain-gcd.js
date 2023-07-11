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
  getGCD,
} from './index.js';

welcome();
const userName = name();

hello();
console.log(userName);

// Описание игры
console.log('Find the greatest common divisor of given numbers.');

let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index += 1) {
    const randomNumFirst = getRandomNumber();
    const randomNumSecond = getRandomNumber();

    getQuestion();
    console.log(`${randomNumFirst} ${randomNumSecond}`);

    const userAnswer = getAnswer();

    const result = getGCD(randomNumFirst, randomNumSecond);

    if (result !== userAnswer) {
      getUncorrectAnswer(userAnswer, result, userName);
      break;
    } else {
      count += 1;
      console.log('Correct!');
    }
  }
  if (count === 3) {
    getCongrat(userName);
  }
};

checkCorrect();
