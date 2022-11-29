import React, { useContext } from "react";
import { Tab } from "react-bootstrap";
import { MyContext } from "../context";
import MarketingPlan from "./MarketingPlan";
import PlatformLaunch from "./PlatformLaunch";
import RoadMap from "./RoadMap";
import TaskColumn from "./TaskColumn";
import ViewTask from "./ViewTask";

const Board = () => {
  const { showTask, setShowTask } = useContext(MyContext);
  return (
    <Tab.Content>
      <Tab.Pane eventKey="launch">
        <PlatformLaunch />
      </Tab.Pane>
      <Tab.Pane eventKey="plan">
        <MarketingPlan />
      </Tab.Pane>
      {/* <Tab.Pane eventKey="roadmap">
        <RoadMap />
      </Tab.Pane> */}
      <ViewTask show={showTask} onHide={() => setShowTask(false)} />
    </Tab.Content>
  );
};

export default Board;
