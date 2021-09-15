import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logoLLL from "./../../img/LLL logo.png";

const sidebar = () => {
  function tournament() {
    window.location.href = "/dashboard/tournament";
  }

  return (
    <div className="sideBar">
      <div className="sideBarLogo">
        <img src={logoLLL}></img>
      </div>
      <div className="sideBarMenu">
        <div className="sideBarMenuItem">
          <NavLink
            exact
            to="/dashboard/user"
            activeStyle={{ color: "#01cbee", opacity: "1" }}
          >
            Users
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink
            exact
            to="/dashboard/player"
            activeStyle={{ color: "#01cbee", opacity: "1" }}
          >
            Players
          </NavLink>
        </div>
        <div className="sideBarMenuItem" onClick="tournament()">
          <NavLink
            exact
            to="/dashboard/tournament"
            activeStyle={{ color: "#01cbee", opacity: "1" }}
          >
            Tournaments
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink
            exact
            to="/dashboard/gameServer"
            activeStyle={{ color: "#01cbee", opacity: "1" }}
          >
            Regions
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink
            exact
            to="/dashboard/game"
            activeStyle={{ color: "#01cbee", opacity: "1" }}
          >
            Games
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
