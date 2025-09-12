import React, { useState } from "react";
import BoardSquare from "./Square";

const GameBoard = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const CheckWiner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]);
      return state[a];
      {
        return true;
      }
    }
    return false;
  };

  const IsWinner = CheckWiner();

  const HandleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setisXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {IsWinner ? (
        <>{IsWinner}Won Game</>
      ) : (
        <>
          <div className="board-row">
            <BoardSquare onClick={() => HandleClick(0)} value={state[0]} />
            <BoardSquare onClick={() => HandleClick(1)} value={state[1]} />
            <BoardSquare onClick={() => HandleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <BoardSquare onClick={() => HandleClick(3)} value={state[3]} />
            <BoardSquare onClick={() => HandleClick(4)} value={state[4]} />
            <BoardSquare onClick={() => HandleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <BoardSquare onClick={() => HandleClick(6)} value={state[6]} />
            <BoardSquare onClick={() => HandleClick(7)} value={state[7]} />
            <BoardSquare onClick={() => HandleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default GameBoard;
