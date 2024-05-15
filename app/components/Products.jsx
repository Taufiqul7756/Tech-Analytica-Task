"use client";
import React, { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";
import Input from "./Input";
import { FaList, FaTh } from "react-icons/fa";

const Products = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [isListView, setIsListView] = useState(false);
  const productsPerPage = 6;

  console.log("All products:", products);

  if (isLoading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error.message}</div>;

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="lg:px-10 md:px-8 sm:px-2">
      <div className="flex justify-between items-center mb-10 mt-10">
        <h1 className="text-xl font-bold">Our All Products</h1>
        <div className="flex justify-center items-center gap-2 text-xl">
          <FaTh
            onClick={() => setIsListView(false)}
            className={
              !isListView ? "text-blue-500 cursor-pointer" : "cursor-pointer"
            }
          />
          <FaList
            onClick={() => setIsListView(true)}
            className={
              isListView ? "text-blue-500 cursor-pointer" : "cursor-pointer"
            }
          />
        </div>
      </div>
      <div className="mb-10">
        <Input placeholder="Search" />
      </div>

      <div
        className={
          isListView
            ? ""
            : "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
        }
      >
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            isListView={isListView}
          />
        ))}
      </div>
      <div className="mt-10 flex lg:justify-end md:justify-center md:items-center sm:justify-center sm:items-center mr-3">
        <nav>
          <ul className="pagination flex justify-center items-center gap-5 mb-5">
            <li className="page-item">
              <button
                onClick={() =>
                  paginate(currentPage === 1 ? 1 : currentPage - 1)
                }
                disabled={currentPage === 1}
              >
                <MdOutlineSkipPrevious className="text-2xl" />
              </button>
            </li>
            {[
              ...Array(Math.ceil(products.length / productsPerPage)).keys(),
            ].map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  pageNumber + 1 === currentPage
                    ? "active bg-blue-500 px-2 py-1 rounded-sm"
                    : ""
                }`}
              >
                <button onClick={() => paginate(pageNumber + 1)}>
                  {pageNumber + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                onClick={() =>
                  paginate(
                    currentPage === Math.ceil(products.length / productsPerPage)
                      ? currentPage
                      : currentPage + 1
                  )
                }
                disabled={
                  currentPage === Math.ceil(products.length / productsPerPage)
                }
              >
                <MdOutlineSkipNext className="text-2xl" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;
