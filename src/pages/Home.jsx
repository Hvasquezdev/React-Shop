import React from "react";

import Header from "../components/Header";
import ProductList from "../components/organisms/ProductList";
import useAppContext from "../hooks/useAppContext";
import useProducts from "../hooks/useProducts";

function Home() {
  const { products } = useProducts();
  const { addProductToCart } = useAppContext();

  return (
    <>
      <Header />
      <ProductList products={products} onCartClick={addProductToCart} />
    </>
  );
}

export default Home;
