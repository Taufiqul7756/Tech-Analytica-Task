import React from "react";
import Cart from "../components/Cart";
import { Toaster } from "react-hot-toast";

const CartPage = () => {
  return (
    <div className=" w-2/3 mx-auto flex justify-center">
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <Cart />
    </div>
  );
};

export default CartPage;
