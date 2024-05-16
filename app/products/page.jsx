"use client";
import React, { useContext } from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import ProductsContext from "../context/ProductsContext";
import { Toaster } from "react-hot-toast";

const ProductPage = () => {
  const { isLoading, error } = useContext(ProductsContext);

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Toaster />
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-24 w-24"></div>
        </div>
      ) : (
        <div className="grid layout-container ">
          <Products />
          <div className="hidden lg:block mt-[108px]">
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
