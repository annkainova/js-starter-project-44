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
  getRandomSign,
} from './index.js';

welcome();
const userName = name();

hello();
console.log(userName);

// Описание игры
console.log(`What is the result of the expression?`);

let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index++) {
    const randomNumFirst = getRandomNumber();
    const randomNumSecond = getRandomNumber();
    const randomSign = getRandomSign();

    getQuestion();
    console.log(`${randomNumFirst}${randomSign}${randomNumSecond}`);

    const userAnswer = getAnswer();

    const result = String(
      eval(`${randomNumFirst}${randomSign}${randomNumSecond}`)
    );

    if (result !== userAnswer) {
      getUncorrectAnswer(userAnswer, result, userName);
      break;
    } else {
      count++;
      console.log('Correct!');
    }
  }
  if (count === 3) {
    getCongrat(userName);
  }
};

checkCorrect();
