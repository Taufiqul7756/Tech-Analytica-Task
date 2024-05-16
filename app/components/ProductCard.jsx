import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ProductCard = ({ product, addToCart, isListView }) => {
  const { title, price, description, image, rating } = product;

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

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart successfully!");
  };

  return (
    <div
      className={`max-w-xs bg-[#F7F8F8] shadow-lg rounded-lg overflow-hidden ${
        isListView ? "list-card " : ""
      }`}
    >
      {isListView ? (
        <>
          <div className="w-1/3">
            <img
              className="w-full h-48 object-fit object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="w-2/3 px-4 py-2 ">
            <h2 className="text-gray-800 text-xl font-semibold">
              {title.slice(0, 50)} ...
            </h2>
            <p className="text-gray-600 mt-1">{description.slice(0, 70)}...</p>
            <div className="flex items-center mt-2 mb-2">
              {renderRatingStars()}
            </div>
            <span className="text-gray-700">({rating.count} Review)</span>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-500 font-bold">${price}</span>
              <button
                className="bg-[#212529] text-white px-3 py-1 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="w-full h-48 object-fit object-contain"
            src={image}
            alt={title}
          />
          <div className="px-4 py-2">
            <h2 className="text-gray-800 text-xl font-semibold">
              {title.slice(0, 20)}
            </h2>
            <p className="text-gray-600 mt-1">{description.slice(0, 30)}...</p>
            <div className="flex items-center mt-4 mb-1">
              {renderRatingStars()}
            </div>
            <span className="text-[#ADB0B7]">({rating.count} Review)</span>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-500 font-bold">${price}</span>
              <button
                className="bg-[#212529] text-white px-3 py-1 rounded hover:bg-[#525CEB]"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
