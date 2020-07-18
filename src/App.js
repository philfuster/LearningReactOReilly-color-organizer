import React, { useState } from 'react';
import colorData from './data/color-data.json';
import ColorList from './components/ColorList.js';
import './App.css';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    ></ColorList>
  );
}

export default App;
