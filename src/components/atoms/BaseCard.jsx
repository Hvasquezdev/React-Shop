import React from "react";
import "./../../assets/styles/atoms/BaseCard.scss";

function BaseCard({ children, className }) {
  return <div className={`base-card ${className}`}>{children}</div>;
}

export default BaseCard;
