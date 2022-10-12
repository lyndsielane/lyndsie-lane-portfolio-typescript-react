import "./MenuItem.scss";

interface MenuItemProperties {
  label: string;
}

function MenuItem(props: MenuItemProperties) {
  return <div className="MenuItem">{props.label}</div>;
}

export default MenuItem;
