#!/usr/bin/env node

import {
  welcome,
  name,
  hello,
  getRandomNumber,
  getRandomNumberLimit,
  getQuestion,
  getAnswer,
  getUncorrectAnswer,
  getCongrat,
  arithmeticProgressive,
} from './index.js';

welcome();
const userName = name();

hello();
console.log(userName);

// Описание игры
console.log('What number is missing in the progression?');

let count = 0;
const checkCorrect = () => {
  for (let index = 0; index < 3; index += 1) {
    const start = getRandomNumber();
    const step = getRandomNumberLimit(1, 10);
    const length = getRandomNumberLimit(5, 15);
    const number = getRandomNumberLimit(5, length);

    const array = arithmeticProgressive(start, step, length);

    const changeArray = (arr, ind) => {
      const newArray = arr.slice();
      newArray[ind - 1] = '..';
      return newArray.join(' ');
    };

    // Вопрос
    getQuestion();
    console.log(changeArray(array, number));

    // Ответ
    const userAnswer = getAnswer();
    const result = String(array[index - 1]);

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
