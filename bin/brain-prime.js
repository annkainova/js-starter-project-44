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
  isPrime,
} from './index.js';

welcome();
const userName = name();

hello();
console.log(userName);

// Описание игры
console.log(`Answer "yes" if given number is prime. Otherwise answer "no"`);
let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index++) {
    const number = getRandomNumber();
    // Вопрос
    getQuestion();
    console.log(number);

    // Ответ
    const userAnswer = getAnswer();

    const result = isPrime(number);

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
