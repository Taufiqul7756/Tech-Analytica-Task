"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { renderRatingStars } from "../utils/utils";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [isChecked, setIsChecked] = useState(false);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.error("Product removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!isChecked) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    toast.success("Proceeding to checkout");
  };

  return (
    <div className="flex flex-col items-center justify-start border-2 p-2 mb-20 rounded-md">
      <div className="text-sm py-1 rounded-md font-bold mb-4 bg-black w-full flex justify-center items-center text-white">
        SELECTED PRODUCTS
      </div>
      {cart.length === 0 ? (
        <p className="py-10">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4  ">
            {cart.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-5 gap-2 items-center bg-[#F7F8F8] p-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover"
                />
                <div className="col-span-3">
                  <p className="font-bold">{product.title?.slice(0, 25)}...</p>
                  <p className="text-sm text-gray-500">
                    {product.description?.slice(0, 30)}...
                  </p>
                  <div className="flex items-center mb-2 mt-2">
                    {renderRatingStars(product.rating)}
                  </div>
                  <span className="ml-1 text-[#424243]">
                    ({product.rating.count} Reviews)
                  </span>
                  <p className="text-red-600 font-bold mt-3">
                    ${product.price}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="col-span-1 text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-10 ">
            <div className="text-lg font-semibold xl:ml-32 lg:ml-24 md:ml-10">
              TOTAL: ${total.toFixed(2)}
            </div>
          </div>
        </>
      )}

      <div className="mt-4 flex justify-center items-baseline gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I have read and agree to the{" "}
          <span className="underline cursor-pointer">terms and conditions</span>{" "}
          , <span className="underline cursor-pointer">refund policy</span>
        </label>
      </div>

      <div className="ml-56 ">
        <button
          onClick={handleCheckout}
          className="bg-black text-white py-2 text-sm px-4 mt-4 rounded"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
