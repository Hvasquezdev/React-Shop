import React from "react";
import "./../../assets/styles/organisms/ProductCard.scss";

import cartIcon from "./../../assets/icons/bt_add_to_cart.svg";
import Button from "../atoms/Button";

function ProductCard({ product, onCartClick }) {
  const handleCartClick = () => (onCartClick ? onCartClick(product) : null);

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
        <Button
          isIconButton
          className="product-info__cart-button"
          onClick={handleCartClick}
        >
          <img src={cartIcon} alt="Cart" />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
