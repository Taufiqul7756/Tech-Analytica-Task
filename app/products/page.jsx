import React from "react";
import Products from "../components/Products";
import CartPage from "../cart/page";
import Cart from "../components/Cart";

const ProductPage = () => {
  return (
    <div className="flex gap-2">
      <div className="">
        <Products />
      </div>
      <div className="hidden md:block mt-[108px]">
        <Cart />
      </div>
    </div>
  );
};

export default ProductPage;
