import React, { useState, useEffect, useRef } from "react";
import "../styles/gameboard.scss";

const GameBoard = () => {
  const [gridCells, setGridCells] = useState([]);
  const [boardSize, setBoardSize] = useState(8);
  const [classicColor, setClassicColor] = useState(true);
  const [retroColor, setRetroColor] = useState(false);
  const [playerOneCurrentColor, setPlayerOneCurrentColor] = useState("orange");
  const [playerTwoCurrentColor, setPlayerTwoCurrentColor] = useState("purple");

  const redPlayerStyling = {
    backgroundColor: "red",
  };

  const blackPlayerStyling = {
    backgroundColor: "black",
  };

  const orangePlayerStyling = {
    backgroundColor: "orange",
  };

  const purplePlayerStyling = {
    backgroundColor: "purple",
  };

  const redPieceRef = useRef(null);
  const blackPieceRef = useRef(null);

  const createGrid = () => {
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
  };

  useEffect(() => {
    createGrid();
  }, []);

  const updateBoardSize = (e) => {
    e.preventDefault();
    setBoardSize(parseInt(e.target.value));
  };

  const changeColor = () => {
    let currentClassic = classicColor;
    let currentRetro = retroColor;

    if (!currentRetro) {
      setClassicColor(false);
      setRetroColor(true);
      setPlayerOneCurrentColor("orange");
      setPlayerTwoCurrentColor("purple");
    } else {
      setRetroColor(false);
      setClassicColor(true);
      setPlayerOneCurrentColor("red");
      setPlayerTwoCurrentColor("black");
    }

    createGrid();
  };

  return (
    <div className="game-container">
      <form>
        <label>
          Board Size:
          <input type="text" name="board_size" onChange={updateBoardSize} />
        </label>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="classic"
              checked={classicColor}
              onChange={changeColor}
            />
            Classic color
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="retro"
              checked={retroColor}
              onChange={changeColor}
            />
            Retro color
          </label>
        </div>
      </form>
      <div className="gameboard">
        {gridCells.length > 0
          ? gridCells.map((row) => {
              return row.map((cells) => {
                return cells.cellType == 0 ? (
                  <div className="whiteCell" id={cells.cellIndex}>
                    {cells.cellIndex < boardSize * 2 ? (
                      <div
                        className="redPiece"
                        style={{ backgroundColor: playerOneCurrentColor }}
                        ref={redPieceRef}></div>
                    ) : null}

                    {cells.cellIndex >
                    boardSize * boardSize - boardSize * 2 - 1 ? (
                      <div
                        className="blackPiece"
                        style={{ backgroundColor: playerTwoCurrentColor }}
                        ref={blackPieceRef}></div>
                    ) : null}
                  </div>
                ) : (
                  <div className="blueCell" id={cells.cellIndex}>
                    {cells.cellIndex < boardSize * 2 ? (
                      <div
                        className="redPiece"
                        style={{
                          backgroundColor: playerOneCurrentColor,
                        }}
                        ref={redPieceRef}></div>
                    ) : null}

                    {cells.cellIndex >
                    boardSize * boardSize - boardSize * 2 - 1 ? (
                      <div
                        className="blackPiece"
                        style={{ backgroundColor: playerTwoCurrentColor }}
                        ref={blackPieceRef}></div>
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
