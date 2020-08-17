import React, { useState, useEffect } from "react";
import "../styles/gameboard.scss";

const GameBoard = (props) => {
  const { n_size } = props;
  const [gridCells, setGridCells] = useState([]);

  useEffect(() => {
    function createGrid(n_size) {
      let isDark = true;
      let gridArray = [];
      let gridRow = [];
      for (let row = 0; row < n_size; row++) {
        for (let col = 0; col < n_size; col++) {
          isDark ? gridRow.push(0) : gridRow.push(1);

          isDark = !isDark;
        }
        gridArray.push(gridRow);
        gridRow = [];
      }
      setGridCells(gridArray);
    }

    createGrid(n_size);
  }, [n_size]);

  return (
    <div className="gameboard">
      {gridCells.length > 0
        ? gridCells.map((row) => {
            return row.map((cells) => {
              return cells == 0 ? (
                <div className="whiteCell"></div>
              ) : (
                <div className="blackCell"></div>
              );
            });
          })
        : null}
    </div>
  );
};

export default GameBoard;
