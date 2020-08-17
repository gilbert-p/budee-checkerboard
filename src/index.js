import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import GameBoard from "./components/GameBoard";

ReactDOM.render(
  <React.StrictMode>
    <h2 id="title">Budee Checkerboard</h2>
    <GameBoard n_size={5}></GameBoard>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
