export default function Square({
  value,
  onSquareClick,
  highlight = false,
}: {
  value: string | null;
  onSquareClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onSquareClick}
      className={`w-20 h-20 flex items-center justify-center text-2xl font-bold 
                  rounded-lg shadow-md transition transform duration-200
                  ${highlight ? "bg-yellow-300" : "bg-white"} 
                  hover:scale-105 hover:bg-blue-100`}
    >
      {value}
    </button>
  );
}
