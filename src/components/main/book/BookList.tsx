import React from 'react';
import Book from './Book';

import './book-list.css';

type IProps = {
  books: any[];
  map: object[];
};

const BookList: React.FC<IProps> = (props) => (
  <div className="book_card_wrapper">
    {props.books.map((book: any, id: React.Key | null | undefined) => {
      return <Book book={book} key={id} />;
    })}
  </div>
);

export default BookList;
