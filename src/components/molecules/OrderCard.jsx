import React from "react";
import "./../../styles/molecules/OrderCard.scss";

import closeIcon from "./../../icons/icon_close.png";
import Button from "../atoms/Button";

function OrderCard() {
  return (
    <div className="order-card">
      <figure className="order-card__media">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="bike"
          width="70px"
          height="70px"
          loading="lazy"
          className="order-card__image"
        />
      </figure>

      <p className="order-card__name">Bike</p>
      <p className="order-card__price">$30,00</p>

      <Button isIconButton>
        <img
          src={closeIcon}
          alt="close"
          className="order-card__icon"
        />
      </Button>
    </div>
  );
}

export default OrderCard;
