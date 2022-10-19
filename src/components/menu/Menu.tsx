import { MenuItem } from "../";
import "./Menu.scss";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth <= 640);
  const [showMenu, setShowMenu] = useState(!isSmallScreen);
  const onMenuClickHandler = () => setShowMenu(!showMenu);
  const onMenuItemsClickHandler = () => setShowMenu(!isSmallScreen);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
      setIsSmallScreen(windowWidth <= 640);
      setShowMenu(!isSmallScreen);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [windowWidth, isSmallScreen, setWindowWidth, setIsSmallScreen, setShowMenu]);

  return (
    <div className="Menu">
      <FiMenu className="menuIcon" onClick={ onMenuClickHandler } />
      <div className={showMenu ? "items" : "items hidden"} onClick={ onMenuItemsClickHandler }>
        <MenuItem label="Home" href="/" isHome={true} />
        <MenuItem label="About" href="/about" />
        <MenuItem label="Portfolio" href="/portfolio" />
        <MenuItem label="Contact" href="/contact" />
      </div>
      
    </div>
  );
}

export default Menu;
