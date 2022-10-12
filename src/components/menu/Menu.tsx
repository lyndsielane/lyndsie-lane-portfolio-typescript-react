import React from "react";
import MenuItem from "../menuItem/MenuItem";
import "./Menu.scss";

function Menu() {
  return (
    <div className="Menu">
      <div className="items">
        <MenuItem label="Home" />
        <MenuItem label="About" />
        <MenuItem label="Portfolio" />
        <MenuItem label="Contact" />
      </div>
    </div>
  );
}

export default Menu;
