import React from "react";

const Sidebar = () => {
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
        <button className="sideBar_top_createBtn">
          <i className="fa-solid fa-border-all"></i>+ Create New Board
        </button>
      </div>
      <div className="sideBar_bottom"></div>
    </div>
  );
};

export default Sidebar;
