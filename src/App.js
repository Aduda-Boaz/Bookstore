import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDisplay from './components/Display';
import Nav from './components/NavBar';
import BookCategories from './components/Category';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<BookDisplay />} />
        <Route path="categories" element={<BookCategories />} />
      </Routes>
    </div>
  );
}

export default App;
