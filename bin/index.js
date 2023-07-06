import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log(`Welcome to the Brain Games!`);
};

export const name = () => {
  return readlineSync.question('May I have your name? ');
};

export const hello = () => {
  process.stdout.write('Hello, ');
};

export const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

export const getRandomNumberLimit = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getQuestion = () => {
  process.stdout.write('Question: ');
};

export const getAnswer = () => {
  return readlineSync.question('Your answer: ');
};

export const getUncorrectAnswer = (userAnswer, result, userName) => {
  console.log(
    `"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".Let's try again, ${userName}!`
  );
};

export const getCongrat = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const getRandomSign = () => {
  const value = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
};

export const getGCD = (number1, number2) => {
  while (number2 !== 0) {
    const remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  }
  // возвращаем значение НОД
  return String(number1);
};

export const arithmeticProgressive = (start, step, length) => {
  const progression = [];
  let current = start;

  for (let i = 0; i < length; i++) {
    progression.push(current);
    current += step;
  }
  return progression;
};

// правильное число
export const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
