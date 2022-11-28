import React, { useContext } from "react";
import { MyContext } from "../context";
import "../styles/Navbar.css";
import AddTask from "./AddTask";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { showAdd, setShowAdd, user, showMobile, setShowMobile } =
    useContext(MyContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="title">
        <picture>
          <source
            srcSet="https://kanban-app-jay.netlify.app/assets/logo-mobile.c1810dc7.svg"
            media="(max-width:767px"
          ></source>
          <img src="https://kanban-app-jay.netlify.app/assets/logo-light.4fb0dd87.svg" />
        </picture>
      </div>
      {user && pathname == "/" && (
        <div className="navbar_content desktop">
          <h2>Platform Launch</h2>
          <button className="add_Btn_header" onClick={() => setShowAdd(true)}>
            + Add New task
          </button>
        </div>
      )}
      {user && pathname == "/" && (
        <div className="navbar_content_mobile">
          <button className="launch_mobile">
            <h2>Platform Launch</h2>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button
            onClick={() => setShowMobile(true)}
            className="add_Btn_header"
          >
            +
          </button>
        </div>
      )}
      <AddTask show={showAdd} onHide={() => setShowAdd(false)} />
    </div>
  );
};

export default Navbar;
