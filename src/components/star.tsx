import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const StarRating = ({ stars }) => {
  const filledStars = Array.from({ length: stars }, (_, index) => (
    <MdOutlineStar key={index} size={25} color="white" />
  ));

  const remainingStars = Array.from({ length: 5 - stars }, (_, index) => (
    <MdOutlineStar key={index} size={25} />
  ));

  return (
    <div className="flex">
      <p className="flex">{filledStars}</p>
      <p className="flex text-primary-startone">{remainingStars}</p>
    </div>
  );
};

export { StarRating };
