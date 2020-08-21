import React, { useState, useEffect } from "react";
import "../styles/gameboard_v2.scss";

//step 1 Create a responsive gameboard

interface BoardInterface {
  boardDimensions: number;
}

const GameBoard_v2: React.FC<BoardInterface> = (props) => {
  const { boardDimensions } = props;

  const [boardSize, setBoardSize] = useState<String>("250");
  const [boardCells, setBoardCells] = useState<Array<JSX.Element> | null>(null);
  const [columnRowTemplate, setColumnRowTemplate] = useState<String>("");
  const [windowWidth, setWindowWidth] = useState<number>(1920);

  const createBoard = () => {
    let grid: Array<any> = [];
    let gridRow: Array<any> = [];
    let isDark: Boolean = false;

    for (let row = 0; row < boardDimensions; row++) {
      for (let col = 0; col < boardDimensions; col++) {
        gridRow.push(
          <div
            className={`cell ${isDark ? `dark` : `bright`}`}
            style={{
              height: `${(0.4 * windowWidth) / boardDimensions}`,
              width: `${(0.4 * windowWidth) / boardDimensions}`,
            }}></div>
        );
        isDark = !isDark;
      }
      grid.push(gridRow);
      if (boardDimensions % 2 == 0) {
        isDark = !isDark;
      }
      gridRow = [];
    }

    console.log(grid);
    setBoardCells(grid);
    setColumnRowTemplate(setTemplate());
  };

  const setTemplate = () => {
    let templateString = new Array<any>(boardDimensions).fill("1fr").join(" ");
    return templateString;
  };

  const setPlayers = () => {
    //set players for top of board
  };

  //Create board based on viewport width
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
    handleResize();
    createBoard();
  }, [boardDimensions, windowWidth]);

  return (
    <>
      <div
        className="gameboard"
        style={{
          gridTemplateRows: String(columnRowTemplate),
          gridTemplateColumns: String(columnRowTemplate),
          width: `${0.8 * windowWidth}px`,
          height: `${0.4 * windowWidth}px`,
        }}>
        {boardCells != null
          ? boardCells.map((cellRow) => {
              console.log(cellRow);
              return cellRow;
            })
          : null}
      </div>
    </>
  );
};

export default GameBoard_v2;
