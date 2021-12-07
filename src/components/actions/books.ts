import axios from 'axios';
import { BooksAction, BooksActionTypes } from '../types/book';
import { FiltersAction, FiltersActionTypes } from '../types/filter';
import { Dispatch } from 'redux';

export const getBooks = (
  searchQuery: string,
  currentPage: number,
  perPage: number,
  sortBy: string,
  printType: string
) => {
  if (searchQuery === '') {
    searchQuery = 'delphi';
  }
  return async (dispatch: Dispatch<BooksAction | FiltersAction>) => {
    try {
      dispatch({ type: BooksActionTypes.SET_IS_FETCHING, payload: { isFetching: true } });
      const response = await axios.get(
        `https://books.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${perPage}&startIndex=${currentPage}&orderBy=${sortBy}&printType=${printType}`
      );
      dispatch(setBooks(response.data));
    } catch (e) {
      dispatch({ type: BooksActionTypes.SET_FETCH_ERROR, payload: { isFetchError: true } });
      dispatch({ type: BooksActionTypes.SET_IS_FETCHING, payload: { isFetching: false } });
      setTimeout(() => {
        dispatch({ type: BooksActionTypes.SET_FETCH_ERROR, payload: { isFetchError: false } });
      }, 5000);
    }
  };
};

export function setBooks(books: any): BooksAction {
  return { type: BooksActionTypes.SET_BOOKS, payload: books };
}

export function setSortBy(sortBy: any): FiltersAction {
  return { type: FiltersActionTypes.SET_SORT_BY, payload: sortBy };
}

export function setPrintType(printType: any): FiltersAction {
  return { type: FiltersActionTypes.SET_PRINT_TYPE, payload: printType };
}

export function setCurrentPage(page: any): BooksAction {
  return { type: BooksActionTypes.SET_CURRENT_PAGE, payload: page };
}

export default getBooks;
