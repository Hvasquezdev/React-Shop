import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/styles/molecules/MenuLink.scss";

import { getStringFromObjectKeys } from "../../utils";

function MenuLink({ children, to, textAlign = "end", fontSize = "md" }) {
  const classNames = getStringFromObjectKeys({
    "menu-link": true,
    [`menu-link--text-${textAlign}`]: textAlign,
    [`menu-link--text-${fontSize}`]: fontSize,
  });

  return (
    <li className={classNames}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default MenuLink;
