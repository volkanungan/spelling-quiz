import {
  FaCheck,
  FaHourglassStart,
  FaHourglassHalf,
  FaHourglassEnd,
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export function TimerAnimation({ secondsLeft }) {
  let timerIcon;
  switch (secondsLeft) {
    case 3: {
      timerIcon = <FaHourglassStart />;
      break;
    }
    case 2: {
      timerIcon = <FaHourglassHalf />;
      break;
    }
    case 1: {
      timerIcon = <FaHourglassEnd />;
      break;
    }
    default:
      return null;
  }
  return (
    <>
      <span
        className="bg-red-200 rounded-full p-5 border-blue border-dashed border-2 animate-bounce
    text-tw-gray-700 drop-shadow-sm text-3xl"
        aria-hidden="true"
      >
        {timerIcon}
      </span>
      <span
        role="timer"
        aria-label="Seconds left to answer"
        className="sr-only"
      >
        {secondsLeft}
      </span>
    </>
  );
}

export function AnswerAnimation({ animation: answer }) {
  if (answer !== 'wrong' && answer !== 'correct') {
    return null;
  }
  return (
    <>
      <span
        aria-hidden="true"
        className={`rounded-full ${
          answer === 'correct' ? 'bg-green-200' : 'bg-red-100'
        } p-3 border-blue border-dashed border-2
  drop-shadow-sm`}
      >
        {answer === 'correct' ? (
          <FaCheck className="text-4xl text-emerald-600 animate-scale-up drop-shadow" />
        ) : (
          <IoClose className="text-4xl text-red-600 animate-scale-up drop-shadow" />
        )}
      </span>
      <p className="sr-only text-center">Your answer was {answer}.</p>
    </>
  );
}
