import React from "react";

import Header from "../components/Header";
import ProductList from "../components/organisms/ProductList";
import useProducts from "../hooks/useProducts";

function Home() {
  const { products } = useProducts();

  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}

export default Home;
