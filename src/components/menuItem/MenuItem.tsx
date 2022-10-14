import "./MenuItem.scss";
import { NavLink } from "react-router-dom";

interface MenuItemProperties {
  label: string;
  href: string;
  isHome?: boolean;
}

function MenuItem(props: MenuItemProperties) {
  return (
    <NavLink className="MenuItem" end={props.isHome} to={props.href}>
      {props.label}
    </NavLink>
  );
}

export default MenuItem;
