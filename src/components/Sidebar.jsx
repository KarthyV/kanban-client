import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="sideBar">
      <div className="sideBar_top">
        <div className="sideBar_top_title">All Boards (3)</div>
        <div className="sideBar_top_features_cont">
          <button className="sideBar_top_features">
            <Nav.Link eventKey="launch">
              <i className="fa-solid fa-border-all"></i>Platform Launch
            </Nav.Link>
          </button>
          <button className="sideBar_top_features">
            <Nav.Link eventKey="plan">
              <i className="fa-solid fa-border-all"></i>Marketing Plan
            </Nav.Link>
          </button>
          <button className="sideBar_top_features">
            <Nav.Link eventKey="roadmap">
              <i className="fa-solid fa-border-all"></i>Roadmap
            </Nav.Link>
          </button>
        </div>
        <button className="sideBar_top_features createBtn">
          <i className="fa-solid fa-border-all"></i>+ Create New Board
        </button>
      </div>
      <div className="sideBar__bottom">
        <div className="sideBar__theme">
          <i class="fa-solid fa-sun"></i>
          <button
            onClick={() => setToggled(!toggled)}
            className="sideBar__theme_toggle"
          >
            <span
              className="sideBar__theme_toggle_ball"
              style={toggled ? { right: "10%" } : { left: "10%" }}
            ></span>
          </button>
          <i class="fa-solid fa-moon"></i>
        </div>
        <button className="sideBar_top_features logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
