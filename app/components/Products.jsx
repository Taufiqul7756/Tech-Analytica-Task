"use client";
import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { addToCart } = useCart();
  console.log("All products:", products);

  if (isLoading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
