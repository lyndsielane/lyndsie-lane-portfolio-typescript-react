import "./Header.scss";
import { Link } from "react-router-dom";
import { Menu } from "../";

function Header() {
  return (
    <div className="Header">
      <Link className="name" to="/">
        Lyndsie Lane
      </Link>
      <Menu />
    </div>
  );
}

export default Header;
