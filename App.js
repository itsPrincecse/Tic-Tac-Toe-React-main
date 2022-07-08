import React, { useEffect, useState } from "react";
import "./styles.css";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];

const App = () => {
  const [gameState, setGameState] = useState(initialState);
  const [isChange, setIsChange] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isChange ? "X" : "0";
    setIsChange(!isChange);
    setGameState(strings);
  };

  const clear = () => {
    setGameState(initialState);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      alert(`woo!!! the player ${winner} won the game `);
      clear();
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <h1 className="heading-text">Tic Tac Toe Game!!! </h1>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        ></Square>
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        ></Square>
        <Square
          className="b-bottom"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        ></Square>
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        ></Square>
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        ></Square>
        <Square
          className="b-bottom"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        ></Square>
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        ></Square>
        <Square
          className="b-right"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        ></Square>
        <Square onClick={() => onUserClicked(8)} state={gameState[8]}></Square>
      </div>
      <button className="clear-button" onClick={clear}>
        All Clear
      </button>
    </div>
  );
};
export default App;
