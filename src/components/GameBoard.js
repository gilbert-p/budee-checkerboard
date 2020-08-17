import React, { useState, useEffect } from "react";
import "../styles/gameboard.scss";

const GameBoard = () => {
  const [gridCells, setGridCells] = useState([]);
  const [boardSize, setBoardSize] = useState(8);

  useEffect(() => {
    function createGrid() {
      let isDark = true;
      let gridArray = [];
      let gridRow = [];

      let cellObject = {};
      let count = 0;

      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          isDark
            ? gridRow.push({ cellType: 0, cellIndex: count })
            : gridRow.push({ cellType: 1, cellIndex: count });

          isDark = !isDark;

          count++;
        }
        isDark = !isDark;
        gridArray.push(gridRow);
        gridRow = [];
      }
      setGridCells(gridArray);
    }

    createGrid(boardSize);
  }, [boardSize]);

  const updateBoardSize = (e) => {
    e.preventDefault();
    setBoardSize(parseInt(e.target.value));
  };

  return (
    <div className="game-container">
      <form>
        <label>
          Board Size:
          <input type="text" name="board_size" onChange={updateBoardSize} />
        </label>
      </form>
      <div className="gameboard">
        {gridCells.length > 0
          ? gridCells.map((row) => {
              return row.map((cells) => {
                return cells.cellType == 0 ? (
                  <div className="whiteCell" id={cells.cellIndex}>
                    {cells.cellIndex < boardSize * 2 ? (
                      <div className="redPiece"></div>
                    ) : null}

                    {cells.cellIndex >
                    boardSize * boardSize - boardSize * 2 - 1 ? (
                      <div className="blackPiece"></div>
                    ) : null}
                  </div>
                ) : (
                  <div className="blueCell" id={cells.cellIndex}>
                    {cells.cellIndex < boardSize * 2 ? (
                      <div className="redPiece"></div>
                    ) : null}

                    {cells.cellIndex >
                    boardSize * boardSize - boardSize * 2 - 1 ? (
                      <div className="blackPiece"></div>
                    ) : null}
                  </div>
                );
              });
            })
          : null}
      </div>
    </div>
  );
};

export default GameBoard;
