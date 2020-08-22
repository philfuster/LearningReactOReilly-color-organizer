import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import { ColorProvider } from './hooks/color-hooks';
import { ColorDetails } from './components/ColorDetails';

import './App.css';

function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path='/' element={<ColorList />} />
        <Route path=':id' element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}

export default App;
