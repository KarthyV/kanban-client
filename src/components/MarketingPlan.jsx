import React from "react";
import TaskColumn from "./TaskColumn";

const MarketingPlan = () => {
  return (
    <div className="taskBoard">
      {[...Array(2)].map((each, index) => {
        return <TaskColumn key={index} />;
      })}
    </div>
  );
};

export default MarketingPlan;
