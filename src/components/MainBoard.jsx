import React from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import "../styles/MainBoard.css";
import { Tab } from "react-bootstrap";

const MainBoard = () => {
  return (
    <div className="mainBoard">
      <Tab.Container defaultActiveKey="launch">
        <Sidebar />

        <Board />
      </Tab.Container>
    </div>
  );
};

export default MainBoard;
