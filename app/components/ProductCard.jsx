// components/ProductCard.jsx
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product, addToCart }) => {
  const { title, price, description, image, rating } = product;

  // Function to generate star icons based on the rating
  const renderRatingStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating.rate * 2) / 2; // Round to the nearest half
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
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1">{description.slice(0, 20)}...</p>
        <div className="flex items-center mt-2 mb-2">{renderRatingStars()}</div>
        <span className="text-gray-700">({rating.count} Review)</span>
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-500 font-bold">${price}</span>
          <button
            className="bg-[#212529] text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
