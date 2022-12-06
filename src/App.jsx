import { useEffect, useState, useRef } from 'react';
import Game from './Game';
import { getChoices } from './getRandomSpelling';
import useCountdown from './useCountdown';
import GameResults from './GameResults';
import {
  throwLargeConfetti,
  throwMiniConfetti,
  getNewQuestion,
} from './helper';

const questionsPerGame = 10;

function App() {
  const [animation, setAnimation] = useState(null);
  const [choices, setChoices] = useState(getChoices());
  const [secondsLeft, startTimer, stopTimer] = useCountdown();
  const [questionCount, setQuestionCount] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  useEffect(() => {
    if (secondsLeft === 0) {
      stopTimer();
      nextStep();
    }
  }, [secondsLeft]);

  function askQuestion() {
    setQuestionCount((count) => count + 1);
    setChoices(getNewQuestion());
    setAnimation(null);
    startTimer();
  }

  function nextStep() {
    if (questionCount === questionsPerGame) {
      setAnimation('game-end');
      throwLargeConfetti(correctAnswerCount);
      return;
    }

    askQuestion();
  }

  function onChoiceClick(e, button) {
    stopTimer();
    if (choices[button].isCorrect === true) {
      throwMiniConfetti(e, correctAnswerCount);
      setCorrectAnswerCount((answer) => answer + 1);
      setAnimation('correct');
    } else {
      setAnimation('wrong');
    }

    setTimeout(() => nextStep(), 2000);
  }

  function onPlayAgain() {
    setCorrectAnswerCount(0);
    setQuestionCount(0);
    setAnimation(null);
    askQuestion();
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-hero-pattern"
      id="container"
    >
      <div
        className="bg-turquoise opacity-90 border-blue border-dashed border-4 p-7 rounded-lg shadow-2xl mb-10 sm:mb-56
          w-4/6 max-w-screen-sm h-4/6 sm:h-2/5
         text-green-700 text-center "
      >
        {animation == 'game-end' ? (
          <GameResults
            correctAnswerCount={correctAnswerCount}
            questionCount={questionCount}
            onPlayAgain={onPlayAgain}
          />
        ) : (
          <Game
            questionCount={questionCount}
            questionsPerGame={questionsPerGame}
            choices={choices}
            animation={animation}
            secondsLeft={secondsLeft}
            onButtonClick={onChoiceClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
