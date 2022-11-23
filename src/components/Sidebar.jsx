import React, { useState } from "react";

const Sidebar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="sideBar">
      <div className="sideBar_top">
        <div className="sideBar_top_title">All Boards (3)</div>
        <div className="sideBar_top_features_cont">
          <button className="sideBar_top_features">
            <i className="fa-solid fa-border-all"></i>Platform Launch
          </button>
          <button className="sideBar_top_features">
            <i className="fa-solid fa-border-all"></i>Marketing Plan
          </button>
          <button className="sideBar_top_features">
            <i className="fa-solid fa-border-all"></i>Roadmap
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
      </div>
    </div>
  );
};

export default Sidebar;
