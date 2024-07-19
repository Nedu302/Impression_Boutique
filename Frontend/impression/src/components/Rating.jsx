import React, { useState } from 'react';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <svg
            key={index}
            className={` w-5  h-5 cursor-pointer ${
              ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(ratingValue)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.671a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.274a1 1 0 00-.364 1.118l1.188 3.671c.3.921-.755 1.688-1.54 1.118l-3.124-2.274a1 1 0 00-1.176 0L5.45 17.279c-.785.57-1.84-.197-1.54-1.118l1.188-3.671a1 1 0 00-.364-1.118L1.61 9.098c-.783-.57-.381-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.188-3.671z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
