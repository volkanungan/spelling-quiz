import { useRef, useState } from 'react';

const COUNTDOWN_FROM = 7;

export default function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_FROM);
  const timerId = useRef(0);

  function startTimer() {
    timerId.current = setInterval(
      () => setSecondsLeft((s) => (s = Math.max(s - 1, 0))),
      1000
    );
  }

  function stopTimer() {
    if (!timerId.current) {
      return;
    }
    setSecondsLeft(COUNTDOWN_FROM);
    clearInterval(timerId.current);
  }

  return [secondsLeft, startTimer, stopTimer];
}
