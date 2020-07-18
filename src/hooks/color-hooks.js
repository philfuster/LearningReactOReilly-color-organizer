import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
import colorData from '../data/color-data.json';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
export function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  // Rather than allowing user to directly access setColors (and potentially make breaking changes)
  // giving them access to context through only allowed operations.
  const addColor = (title, color) => {
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
