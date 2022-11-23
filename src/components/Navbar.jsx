import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="title">
        <img
          src="https://kanban-app-jay.netlify.app/assets/logo-light.4fb0dd87.svg"
          alt="logo"
        />
      </div>
      <div className="navbar_content">
        <h2>Platform Launch</h2>
        <button className="add_Btn_header">+ Add New task</button>
      </div>
    </div>
  );
};

export default Navbar;
