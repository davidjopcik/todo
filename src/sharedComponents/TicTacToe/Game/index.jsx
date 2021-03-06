import React from "react";
import Board from "../Board";

export default function Game({ gameName, NumberOfPlayers }) {
  
  return (
    <div className="game">
      
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{gameName}, Počet hráčov: {NumberOfPlayers}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
