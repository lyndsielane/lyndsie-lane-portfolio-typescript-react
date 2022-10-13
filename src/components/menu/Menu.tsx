import React from "react";
import MenuItem from "../menuItem/MenuItem";
import "./Menu.scss";

function Menu() {
  return (
    <div className="Menu">
      <div className="items">
        <MenuItem label="Home" href="/" />
        <MenuItem label="About" href="/about" />
        <MenuItem label="Portfolio" href="/portfolio" />
        <MenuItem label="Contact" href="/contact" />
      </div>
    </div>
  );
}

export default Menu;
