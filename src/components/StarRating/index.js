import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';

// return an array with length passed
const createArray = (length) => [...Array(length)];
// Start Rating component
// Renders Star icons with a default of 5
export default function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
  ...props
}) {
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
// Individual Star componenet
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);
