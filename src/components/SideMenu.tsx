import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <div className="sideMenuCss">
        <Link to="/">My Day</Link>
        <Link to="/important">Important</Link>
        <Link to="/planned">Planned</Link>
        <Link to="/assigned">Assigned to me</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </div>
  );
};

export default SideMenu;
