import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer, { fetchBooks } from './books/books';
import { checkStatus } from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkStatus,

});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(fetchBooks());

export default store;
