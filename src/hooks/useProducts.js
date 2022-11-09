import { useState, useEffect } from "react";
import ApiProductsService from "../core/services/Products.service";

const productsService = new ApiProductsService();

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetProducts = async () => {
    setLoading(true);

    const response = await productsService.getProducts();
    setProducts(response);

    setLoading(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return {
    products,
    loading,
  };
};

export default useProducts;
