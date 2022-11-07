import React from "react";
import "./../assets/styles/pages/Products.scss";

import ProductCard from "../components/organisms/ProductCard";

function Products() {
  const listOfProducts = Array(7)
    .fill(null)
    .map((product, key) => <ProductCard key={key} />);

  return <div className="products-page">{listOfProducts}</div>;
}

export default Products;
