"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { renderRatingStars } from "../utils/utils";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  console.log("Cart data from cart.jsx: ", cart);

  return (
    <div className="flex flex-col items-center justify-start border-2 p-2">
      <div className="text-2xl font-bold mb-4 bg-black w-full flex justify-center items-center text-white">
        Selected Products
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart?.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-5 gap-2 items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover"
              />
              <div className="col-span-3">
                <p className="font-bold">{product.title.slice(0, 25)}...</p>
                <p className="text-sm text-gray-500">
                  {product.description.slice(0, 30)}...
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
      )}
      <div className="mt-4">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I have read and agree to the{" "}
          <span className="underline">terms and conditions</span> ,{" "}
          <span className="underline">refund policy</span>
        </label>
      </div>

      <button className="bg-black text-white py-2 text-sm px-4 mt-4 rounded">
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
