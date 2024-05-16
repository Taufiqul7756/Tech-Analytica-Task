"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { renderRatingStars } from "../utils/utils";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  console.log("Cart data from cart.jsx: ", cart);

  return (
    <div className="flex flex-col items-center justify-start border-2 p-2 mb-20">
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
                  <div className="flex items-center">
                    {renderRatingStars(product.rating)}
                    <span className="ml-1">{product.rating.count}</span>
                  </div>
                  <p className="text-red-500">${product.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
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

      <div className="mt-4">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I have read and agree to the{" "}
          <span className="underline cursor-pointer">terms and conditions</span>{" "}
          , <span className="underline cursor-pointer">refund policy</span>
        </label>
      </div>

      <div className="ml-56 ">
        <button className="bg-black text-white py-2 text-sm px-4 mt-4 rounded">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
