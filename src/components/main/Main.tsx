import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import SideMenu from '../side-menu/SideMenu';
import Pagination from '../pagination/Pagination';
import BooksWrapper from '../books-wrapper/BooksWrapper';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import SearchBar from '../search/SearchBar';

import { getBooks, setCurrentPage, setPrintType, setSortBy } from '../actions/books';
import { useTypedSelector } from '../hook/useTypedSelector';

import './main.css';

const Main: React.ElementType = () => {
  const dispatch = useDispatch();
  const books = useTypedSelector((state) => state.books.items);
  const currentPage = useTypedSelector((state) => state.books.currentPage);
  const perPage = useTypedSelector((state) => state.books.perPage);
  const sortBy = useTypedSelector((state) => state.filters.sortBy);
  const printType = useTypedSelector((state) => state.filters.printType);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getBooks(searchValue, currentPage as number, perPage, sortBy, printType));
  }, [currentPage, sortBy, printType]);

  function searchHandler() {
    dispatch(setCurrentPage(1));
    dispatch(getBooks(searchValue, currentPage as number, perPage, sortBy, printType));
  }

  function sortHandlerBy(e: { target: { value: string } }) {
    dispatch(setSortBy(e.target.value));
  }

  function sortHandlerPrintType(e: { target: { value: string } }) {
    dispatch(setPrintType(e.target.value));
  }

  const resetFilters = (e: { target: { value: string } }) => {
    dispatch(setSortBy((e.target.value = 'relevance')));
    dispatch(setPrintType((e.target.value = 'all')));
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <div>
      <ErrorIndicator />
      <div className="main_wrapper">
        <SideMenu
          sortCheckedBy={sortBy === 'relevance'}
          sortCheckedPrintType={printType === 'all'}
          sortHandlerBy={sortHandlerBy}
          sortHandlerPrintType={sortHandlerPrintType}
          resetFilters={resetFilters}
        />
        <div>
          <SearchBar
            handleKeyDown={handleKeyDown}
            searchHandler={searchHandler}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          <BooksWrapper books={books} />
        </div>
      </div>
      <Pagination searchHandler={searchHandler} pages={[]} />
    </div>
  );
};

export default Main;
