import React from "react";
import { IoSearch } from "react-icons/io5";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
