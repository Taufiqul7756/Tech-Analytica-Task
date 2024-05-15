import React, { useContext } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ProductsContext from "../context/ProductsContext";

export const renderRatingStars = (rating) => {
  const { products } = useContext(ProductsContext);

  console.log("utils:", products);
  const stars = [];
  const roundedRating = Math.round(rating?.rate * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating - fullStars === 0.5;

  // Adding full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  // Adding half star
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  // Adding empty stars
  const emptyStars = 5 - Math.ceil(roundedRating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaStar key={`empty${i}`} className="text-gray-400" />);
  }

  return stars;
};
