import React from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import "../styles/MainBoard.css";

const MainBoard = () => {
  return (
    <div className="mainBoard">
      <Sidebar />
      <Board />
    </div>
  );
};

export default MainBoard;
