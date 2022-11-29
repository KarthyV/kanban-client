import React, { useContext } from "react";
import { MyContext } from "../context";
import "../styles/MainBoard.css";
import ViewTask from "./ViewTask";

const TaskCard = ({ data }) => {
  const { showTask, setShowTask } = useContext(MyContext);
  return (
    <div onClick={() => setShowTask(true)} className="card_container">
      <div className="card_title">{data.title}</div>
      <div className="card_subtitle">{data.subTasks.length} subtasks</div>
    </div>
  );
};

export default TaskCard;
