"use client";
import React, { useContext } from "react";
import ProductsContext from "./context/ProductsContext.jsx";

export default function Home() {
  const { products, isLoading, error } = useContext(ProductsContext);

  console.log("All products:", products);

  if (isLoading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error.message}</div>;
  return (
    <div className="flex gap-5 min-h-screen ">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
