import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/styles/molecules/MenuLink.scss";

function MenuLink({ children, to, textAlign = "end" }) {
  return (
    <li className={`menu-link menu-link--text-${textAlign}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default MenuLink;
