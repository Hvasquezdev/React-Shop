import React from "react";
import "./../../assets/styles/organisms/ProductCard.scss";

import cartIcon from "./../../assets/icons/bt_add_to_cart.svg";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.images[0] || ""}
        alt={product.title}
      />
      <div className="product-info">
        <div className="product-info__text">
          <p className="product-price">${product.price}</p>
          <p className="product-name">{product.title}</p>
        </div>
        <figure className="product-info__media">
          <img src={cartIcon} alt="Cart" />
        </figure>
      </div>
    </div>
  );
}

export default ProductCard;
