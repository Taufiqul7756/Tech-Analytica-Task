"use client";
import React, { createContext, useState, useEffect } from "react";
import { getRequest, baseUrl } from "../utils/service";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getRequest(`${baseUrl}/products`);
        setProducts(response);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
