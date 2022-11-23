import React from "react";
import { Tab } from "react-bootstrap";
import MarketingPlan from "./MarketingPlan";
import PlatformLaunch from "./PlatformLaunch";
import RoadMap from "./RoadMap";
import TaskColumn from "./TaskColumn";

const Board = () => {
  return (
    <Tab.Content>
      <Tab.Pane eventKey="launch">
        <PlatformLaunch />
      </Tab.Pane>
      <Tab.Pane eventKey="plan">
        <MarketingPlan />
      </Tab.Pane>
      <Tab.Pane eventKey="roadmap">
        <RoadMap />
      </Tab.Pane>
    </Tab.Content>
  );
};

export default Board;
