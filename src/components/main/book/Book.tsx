import React from 'react';

import naPicture from '../../assets/Images/image-not-available-200x300.jpg';

import './book.css';

type BookProps = {
  book: any;
};

const Book: React.FC<BookProps> = (props) => {
  const book = props.book;
  const { title, imageLinks, authors, publisher, publishedDate } = book.volumeInfo;
  return (
    <div className="bookCard">
      <h2>{title}</h2>
      <img
        src={imageLinks === undefined ? naPicture : imageLinks.thumbnail}
        className="bookImg"
        alt="book-cover"
        width="50%"
      />
      <ul>
        <li>
          <strong>Author:</strong> {authors}
        </li>
        <li>
          <strong>Publisher:</strong> {publisher}
        </li>
        <li>
          <strong>Published:</strong> {publishedDate}
        </li>
      </ul>
    </div>
  );
};

export default Book;
