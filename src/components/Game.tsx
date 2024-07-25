import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './calculateWinner';
import '../styles/Game.css';

const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  function handlePlay(nextSquares: (string | null)[]) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(nextSquares);
    if (winner === 'X') {
      setXScore(xScore + 1);
    } else if (winner === 'O') {
      setOScore(oScore + 1);
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div className="scoreboard">
          <div className="score">X: {xScore}</div>
          <div className="score">O: {oScore}</div>
        </div>
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
