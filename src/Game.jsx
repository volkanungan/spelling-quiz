import Choice from './Choice';
import { TimerAnimation, AnswerAnimation } from './Animations';
import ProgressBar from './ProgressBar';

export default function Game({
  questionCount,
  questionsPerGame,
  choices,
  animation,
  secondsLeft,
  onButtonClick,
}) {
  const buttonsDisabled = animation === 'correct' || animation === 'wrong';
  return (
    <>
      <ProgressBar
        progress={Math.min(((questionCount - 1) * 100) / questionsPerGame, 100)}
      />
      <h1 className="text-xl sm:text-3xl tracking-wider font-header text-blue opacity-100 drop-shadow-xl mt-9 mb-4">
        Which spelling is correct?
      </h1>

      <div className="flex flex-col md:flex-row justify-center">
        {[1, 2].map((buttonNumber) => (
          <Choice
            key={choices[buttonNumber].value}
            onClick={function (e) {
              onButtonClick(e, buttonNumber);
            }}
            disabled={buttonsDisabled}
          >
            {choices[buttonNumber].value}
          </Choice>
        ))}
      </div>

      <div className="flex justify-center m-7">
        <TimerAnimation secondsLeft={secondsLeft} />
        <AnswerAnimation animation={animation} />
      </div>
    </>
  );
}
