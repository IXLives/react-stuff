import { useState } from "react";
import Board from "./Board";
import getCoordinates from "../utils/getCoordinates";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[], moveIndex: number) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    const description =
      move > 0
        ? `Go to move #${move} (${getCoordinates(squares, history[move - 1])})`
        : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="underline text-blue-500 hover:text-blue-700"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex gap-6">
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={(nextSquares) => handlePlay(nextSquares, currentMove)}
        onRestart={handleRestart}
      />
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
