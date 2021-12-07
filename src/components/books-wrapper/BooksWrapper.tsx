import React from 'react';

import { useTypedSelector } from '../hook/useTypedSelector';

import BookList from '../main/book/BookList';

import './books-wrapper.css';

type IProps = {
  books: any[];
};

const BooksWrapper: React.FC<IProps> = (props) => {
  const isFetching = useTypedSelector((state) => state.books.isFetching);
  return (
    <main>
      {isFetching === false ? (
        <BookList books={props.books} map={[]} />
      ) : (
        <div className="loading">
          <div></div>
        </div>
      )}
    </main>
  );
};

export default BooksWrapper;
