import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import BookDisplay from './components/Display';
import Nav from './components/NavBar';
import BookCategories from './components/Category';
import store from './redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<BookDisplay />} />
          <Route path="categories" element={<BookCategories />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
