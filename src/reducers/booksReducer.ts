import { BooksAction, BooksActionTypes } from '../components/types/book';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 8,
  totalItems: 0,
  isFetchError: false,
};

export default function booksReducer(state = defaultState, action: BooksAction) {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS:
      return {
        ...state,
        items: action.payload.items,
        totalItems: action.payload.totalItems,
        isFetching: false,
      };
    case BooksActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case BooksActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case BooksActionTypes.SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}
