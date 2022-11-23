import React from "react";
import TaskCard from "./TaskCard";
import "../styles/MainBoard.css";

const TaskColumn = () => {
  return (
    <div className="column">
      <div className="column_header">
        <span className="column_header_dot"></span>
        <span className="column_header_title">TODO (3)</span>
      </div>
      <div className="task_cards_cont">
        {[...Array(10)].map((each, index) => {
          return <TaskCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default TaskColumn;
