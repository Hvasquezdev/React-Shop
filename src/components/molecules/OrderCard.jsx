import React from "react";
import "./../../assets/styles/molecules/OrderCard.scss";

import closeIcon from "./../../assets/icons/icon_close.png";
import Button from "../atoms/Button";

function OrderCard({ product, onRemove }) {
  const handleRemove = () => onRemove ? onRemove(product.id) : null;

  return (
    <div className="order-card">
      <figure className="order-card__media">
        <img
          src={product.images[0]}
          alt={product.title}
          width="70px"
          height="70px"
          loading="lazy"
          className="order-card__image"
        />
      </figure>

      <p className="order-card__name">{product.title}</p>
      <p className="order-card__price">${product.price}</p>

      <Button isIconButton onClick={handleRemove}>
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
