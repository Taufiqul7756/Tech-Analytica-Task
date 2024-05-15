import React from "react";
import Products from "../components/Products";
import CartPage from "../cart/page";

const ProductPage = () => {
  return (
    <div className="flex gap-2">
      <div>
        <Products />
      </div>
      <div>
        <CartPage />
      </div>
    </div>
  );
};

export default ProductPage;
