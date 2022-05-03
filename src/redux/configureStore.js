import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer, { fetchBooks } from './books/books';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  booksReducer,
});

export const Store = configureStore (
  reducer, 
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
Store.dispatch(fetchBooks());
