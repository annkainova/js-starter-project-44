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
