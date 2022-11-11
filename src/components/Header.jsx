import React from "react";
import "./../assets/styles/Header.scss";

import Logo from "./../assets/logos/logo_yard_sale.svg";
import menuIcon from "./../assets/icons/icon_menu.svg";
import shoppingCartIcon from "./../assets/icons/icon_shopping_cart.svg";
import DesktopMenu from "./organisms/DesktopMenu";
import useAppContext from "../hooks/useAppContext";

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const { state } = useAppContext();

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="header">
      <img src={menuIcon} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleShowMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCartIcon} alt="shopping cart" />
            {state?.cart.length ? (
              <div>{state.cart.length}</div>
            ) : null}
          </li>
        </ul>
      </div>

      {showMenu && <DesktopMenu />}
    </nav>
  );
}

export default Header;
