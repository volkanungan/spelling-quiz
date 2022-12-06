export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-tw-gray-200 h-4 rounded-md opacity-90 drop-shadow-md">
      <div
        className="bg-blue h-4 rounded-md transition-[width] duration-700 ease-in"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
