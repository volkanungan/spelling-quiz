export default function GameResults({
  correctAnswerCount,
  questionCount,
  onPlayAgain,
}) {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-bold tracking-widest drop-shadow-md my-8 text-cerise font-header">
        Congratulations!
      </h1>
      <p className="font-alternative text-2xl sm:text-3xl text-blue">
        You have answered <span className="">{correctAnswerCount}</span> out of{' '}
        {questionCount} questions correctly
      </p>
      <button
        onClick={onPlayAgain}
        className="m-8 sm:m-12 px-4 py-3 shadow-xl rounded-full
      border-solid border-2 border-blue
      bg-gray  text-blue
      font-body text-l sm:text-xl tracking-wider
      hover:bg-blue hover:text-gray hover:scale-110 transition
      disabled:bg-tw-gray-400 disabled:hover:scale-100 disabled:hover:text-blue"
      >
        Play again
      </button>
    </>
  );
}
