import React, { useContext } from "react";
import { MyContext } from "../context";
import "../styles/Navbar.css";
import AddTask from "./AddTask";

const Navbar = () => {
  const { showModal, setShowModal } = useContext(MyContext);
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
        <button className="add_Btn_header" onClick={() => setShowModal(true)}>
          + Add New task
        </button>
      </div>
      <AddTask show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};

export default Navbar;
