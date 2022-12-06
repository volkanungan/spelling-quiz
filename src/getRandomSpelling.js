import spellings from './spellings.json';

function getRandomElementFromArray(array) {
  const length = array.length;
  return array[Math.floor(Math.random() * length)];
}

export function getRandomSpelling() {
  const randomSpelling = getRandomElementFromArray(spellings);
  return {
    ...randomSpelling,
    incorrect: getRandomElementFromArray(randomSpelling.incorrect),
  };
}

export function getChoices() {
  const spellings = getRandomSpelling();
  const isCorrectChoiceFirst = Math.random() > 0.5;
  return isCorrectChoiceFirst
    ? {
        1: { value: spellings.correct, isCorrect: true },
        2: { value: spellings.incorrect, isCorrect: false },
      }
    : {
        1: { value: spellings.incorrect, isCorrect: false },
        2: { value: spellings.correct, isCorrect: true },
      };
}
