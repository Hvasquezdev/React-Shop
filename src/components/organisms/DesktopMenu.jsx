import React from "react";
import "./../../assets/styles/organisms/DesktopMenu.scss";

import MenuLink from "../molecules/MenuLink";
import Button from "../atoms/Button";

function DesktopMenu() {
  return (
    <div className="desktop-menu">
      <ul className="desktop-menu__links">
        <MenuLink>My orders</MenuLink>
        <MenuLink>My account</MenuLink>
        <li className="separator"></li>
        <li>
          <Button color="link">Sign out</Button>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
