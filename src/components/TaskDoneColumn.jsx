import React from "react";
import TaskCard from "./TaskCard";
import "../styles/MainBoard.css";

const TaskDoneColumn = ({ tasks }) => {
  return (
    <div className="column">
      <div className="column_header">
        <span className="column_header_dot"></span>
        <span className="column_header_title">Done ({tasks?.length})</span>
      </div>
      <div className="task_cards_cont">
        {tasks.length > 0 &&
          tasks.map((each, index) => {
            return <TaskCard key={index} />;
          })}
      </div>
    </div>
  );
};

export default TaskDoneColumn;
