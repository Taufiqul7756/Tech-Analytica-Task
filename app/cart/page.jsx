import React from "react";
import Cart from "../components/Cart";
import { Toaster } from "react-hot-toast";

const CartPage = () => {
  return (
    <div className=" w-2/3 mx-auto flex justify-center">
      <Toaster position="bottom-right" />
      <Cart />
    </div>
  );
};

export default CartPage;
