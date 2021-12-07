import React from 'react';

import { useTypedSelector } from '../hook/useTypedSelector';
import { createPages } from '../../utils/pagesCreator';

import './pagination.css';
import { setCurrentPage } from '../actions/books';
import { useDispatch } from 'react-redux';

type IPagesProps = {
  pages: any[];
  searchHandler: () => void;
};

const Pagination: React.FC<IPagesProps> = () => {
  const dispatch = useDispatch();
  const { currentPage, totalItems, perPage } = useTypedSelector((state) => state.books);

  const pagesCount = Math.ceil(totalItems / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage as any);

  return (
    <div className="btn-wrapper">
      {pages.map((page: number, index: any) => (
        <button
          key={index}
          className={currentPage === page ? 'current-page' : 'page'}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
