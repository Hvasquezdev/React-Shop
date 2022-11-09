import React from "react";
import "./../../assets/styles/organisms/ProductList.scss";

import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const listOfProducts = [...products].map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return <div className="product-list">{listOfProducts}</div>;
}

export default ProductList;
