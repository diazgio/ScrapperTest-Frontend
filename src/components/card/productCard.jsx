import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, normal_price, raitings_reviews, raitings_average, image_links } = product;
  const [showDetails, setShowDetails] = useState(false);
  
  const [ratings, reviews] = raitings_reviews.split(' ratings and ');

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image_links[0]} 
        alt={title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-xl font-bold text-gray-900 mb-2">{normal_price}</p>
        <div className="flex items-center mb-2">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-5 w-5 flex-shrink-0 ${
                rating < Math.floor(raitings_average)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{raitings_average}</span>
        </div>
        <p className="text-sm text-gray-600">
          {ratings} ratings
        </p>
        <p className="text-sm text-gray-600 mb-4">
          {reviews}
        </p>
        <Link to={`/product/${id}`}>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
          >
            Ver más
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

