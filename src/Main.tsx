import React, { useState, useEffect } from "react";
import GameBoard_v2 from "./components/GameBoard_v2";

const Main = () => {
  const [boardDimensions, setBoardDimensions] = useState<number>(5);

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let numInput = parseInt(e.target.value);
    if (!isNaN(numInput)) {
      return numInput;
    } else {
      return 1;
    }
  };

  return (
    <div className="main_content">
      <div id="title">
        <h2>Checkerboard Game</h2>
      </div>
      <form className="board_form">
        <label>
          <input
            className="boardsize_input"
            name="board-dimension"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBoardDimensions(validateInput(e));
            }}
          />
        </label>
      </form>
      <GameBoard_v2 boardDimensions={boardDimensions}></GameBoard_v2>
    </div>
  );
};

export default Main;
