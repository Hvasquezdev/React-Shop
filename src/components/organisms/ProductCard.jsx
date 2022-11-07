import React from "react";
import "./../../assets/styles/organisms/ProductCard.scss";

import cartIcon from "./../../assets/icons/bt_add_to_cart.svg";

function ProductCard() {
  return (
    <div class="product-card">
      <img
        className="product-card__image"
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Product"
      />
      <div class="product-info">
        <div className="product-info__text">
          <p className="product-price">$120,00</p>
          <p className="product-name">Bike</p>
        </div>
        <figure className="product-info__media">
          <img src={cartIcon} alt="Cart" />
        </figure>
      </div>
    </div>
  );
}

export default ProductCard;
