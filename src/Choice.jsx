import { useEffect } from 'react';

export default function Choice({ children, disabled, onClick }) {
  useEffect(
    () => document.getElementById(`choice-${children}`).blur(),
    [disabled]
  );
  return (
    <div>
      <button
        id={`choice-${children}`}
        key={children}
        onClick={onClick}
        className="m-3 px-4 py-3 shadow-xl rounded-full
      border-solid border-2 border-blue
      bg-gray  text-blue
      font-body text-l sm:text-xl tracking-wider
      hover:bg-blue hover:text-gray hover:scale-110 transition
      focus:bg-blue focus:text-gray focus:scale-110
      disabled:bg-tw-gray-400 disabled:hover:scale-100 disabled:hover:text-blue"
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
