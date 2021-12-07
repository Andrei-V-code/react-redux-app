export enum BooksActionTypes {
  SET_BOOKS = 'SET_BOOKS',
  SET_IS_FETCHING = 'SET_IS_FETCHING',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_FETCH_ERROR = 'SET_FETCH_ERROR',
}

interface SetBooksAction {
  type: BooksActionTypes.SET_BOOKS;
  payload: {
    items: any[];
    totalItems: number;
    isFetching: true | false;
  };
}

interface SetBooksFetchingAction {
  type: BooksActionTypes.SET_IS_FETCHING;
  payload: {
    isFetching: true | false;
  };
}

interface SetCurrentPageAction {
  type: BooksActionTypes.SET_CURRENT_PAGE;
  payload: {
    currentPage: number;
  };
}

interface SetBooksFetchErrorAction {
  type: BooksActionTypes.SET_FETCH_ERROR;
  payload: {
    isFetchError: true | false;
  };
}

export type BooksAction =
  | SetBooksAction
  | SetBooksFetchingAction
  | SetCurrentPageAction
  | SetBooksFetchErrorAction;
