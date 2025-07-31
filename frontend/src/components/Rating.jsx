import { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({
  value = 0,
  text = '',
  color = 'text-yellow-500',
  size = 'medium',
  editable = false,
  onChange = () => {},
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  // Size classes
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };
  
  // Generate stars
  const generateStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (editable) {
        stars.push(
          <span
            key={i}
            className={`${color} cursor-pointer ${sizeClasses[size]}`}
            onClick={() => onChange(i)}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {(hoverRating || value) >= i ? (
              <FaStar />
            ) : (hoverRating || value) >= i - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      } else {
        stars.push(
          <span key={i} className={`${color} ${sizeClasses[size]}`}>
            {value >= i ? (
              <FaStar />
            ) : value >= i - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      }
    }
    
    return stars;
  };
  
  return (
    <div className="flex items-center">
      <div className="flex">{generateStars()}</div>
      {text && <span className="ml-2 text-gray-600 dark:text-gray-400">{text}</span>}
    </div>
  );
};

export default Rating;