import React, { useEffect, useState } from "react";

import ApiProductsService from "../core/services/Products.service";
import Header from "../components/Header";
import ProductList from "../components/organisms/ProductList";

const productsService = new ApiProductsService();

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await productsService.getProducts();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}

export default Home;
