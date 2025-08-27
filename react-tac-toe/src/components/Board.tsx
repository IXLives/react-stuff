import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

export default function Board({
  xIsNext,
  squares,
  onPlay,
  onRestart,
}: {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  onRestart: () => void;
}) {
  const result = calculateWinner(squares);
  const winner = result?.winner ?? null;
  const winningLine = result?.line ?? [];

  function handleClick(i: number) {
    if (winner || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  let status;
  if (winner) status = `🏆 Winner: ${winner}`;
  else if (result && winner === null && winningLine.length === 0) status = "Draw!";
  else status = `Next player: ${xIsNext ? "❌" : "⭕"}`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold">{status}</div>

      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onSquareClick={() => handleClick(i)}
            highlight={winningLine.includes(i)}
          />
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Restart
      </button>
    </div>
  );
}
