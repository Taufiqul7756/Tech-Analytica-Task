import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";

const ProductPage = () => {
  return (
    <div className="grid layout-container ">
      <Products />
      <div className="hidden lg:block mt-[108px]">
        <Cart />
      </div>
    </div>
  );
};

export default ProductPage;
