import party from 'party-js';
import { getChoices } from './getRandomSpelling';

const alreadyAskedQuestions = [];

export function getNewQuestion() {
  let newQuestion, correctAnswer;
  do {
    newQuestion = getChoices();
    correctAnswer = newQuestion[1].isCorrect
      ? newQuestion[1].value
      : newQuestion[2].value;
  } while (alreadyAskedQuestions.includes(correctAnswer));
  alreadyAskedQuestions.push(correctAnswer);
  return newQuestion;
}

export function throwLargeConfetti(correctAnswerCount) {
  const THRESHOLD_FOR_CONFETTI = 6;

  if (correctAnswerCount > THRESHOLD_FOR_CONFETTI) {
    const container = document.getElementById('container');
    party.confetti(container, {
      count: party.variation.range(200, 500),
      size: party.variation.range(0.6, 1.4),
    });
  }
}

export function throwMiniConfetti(e, correctAnswerCount) {
  party.confetti(e.target, {
    count: party.variation.range(3 * correctAnswerCount, 40),
  });
}
