import "./MenuItem.scss";
import { Link } from "react-router-dom";

interface MenuItemProperties {
  label: string;
  href: string;
}

function MenuItem(props: MenuItemProperties) {
  return (
    <Link className="MenuItem" to={props.href}>
      {props.label}
    </Link>
  );
}

export default MenuItem;
