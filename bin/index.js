import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const name = () => readlineSync.question('May I have your name? ');

export const hello = () => process.stdout.write('Hello, ');

export const getRandomNumber = () => Math.round(Math.random() * 100);

// prettier-ignore
export const getRandomNumberLimit = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getQuestion = () => process.stdout.write('Question: ');

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getUncorrectAnswer = (userAnswer, result, userName) =>
  // prettier-ignore
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".Let's try again, ${userName}!`
  );

// prettier-ignore
export const getCongrat = (userName) => console.log(`Congratulations, ${userName}!`);

export const getRandomSign = () => {
  const value = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
};

export const getGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num2 !== 0) {
    const remainder = num1 % num2;
    num1 = number2;
    num2 = remainder;
  }
  // возвращаем значение НОД
  return String(number1);
};

export const arithmeticProgressive = (start, step, length) => {
  const progression = [];
  let current = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += step;
  }
  return progression;
};

// правильное число
export const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  } else {
    for (let i = 2; i < Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
};

export const calculateResultCalc = (num, sign, num2) => {
  switch (sign) {
    case '+':
      return num + num2;
    case '-':
      return num - num2;
    case '*':
      return num * num2;
    default:
      return 'unknown';
  }
};
