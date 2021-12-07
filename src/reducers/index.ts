import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer from './booksReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
