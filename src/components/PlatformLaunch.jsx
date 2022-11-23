import React from "react";
import TaskColumn from "./TaskColumn";

const PlatformLaunch = () => {
  return (
    <div className="taskBoard">
      {[...Array(3)].map((each, index) => {
        return <TaskColumn key={index} />;
      })}
    </div>
  );
};

export default PlatformLaunch;
