import React from "react";
import "./../../assets/styles/organisms/ProductList.scss";

import ProductCard from "./ProductCard";

function ProductList({ products, onCartClick }) {
  const handleCartClick = (product) =>
    onCartClick ? onCartClick(product) : null;

  const listOfProducts = [...products].map((product) => (
    <ProductCard
      product={product}
      key={product.id}
      onCartClick={handleCartClick}
    />
  ));

  return <div className="product-list">{listOfProducts}</div>;
}

export default ProductList;
