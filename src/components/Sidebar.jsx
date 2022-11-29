import React, { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { MyContext } from "../context";

const Sidebar = () => {
  const [toggled, setToggled] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogOut = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (res.status == 200) {
      setUser("");
      localStorage.clear();
      navigate("/login");
    }
  };
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
          {/* <button className="sideBar_top_features">
            <Nav.Link eventKey="roadmap">
              <i className="fa-solid fa-border-all"></i>Roadmap
            </Nav.Link>
          </button> */}
        </div>
        <button
          onClick={() => navigate("/subscriptions")}
          className="sideBar_top_features createBtn"
        >
          <i className="fa-solid fa-border-all"></i>Pricing
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
        <button className="sideBar_top_features logout" onClick={handleLogOut}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
