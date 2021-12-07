import React from 'react';

import './search-bar.css';

interface IPropsSearch {
  searchHandler: () => void;
  handleKeyDown: any;
  searchValue: string;
  setSearchValue: any;
}

const SearchBar: React.FC<IPropsSearch> = ({
  searchHandler,
  handleKeyDown,
  searchValue,
  setSearchValue
}) => {
  return (
    <div className="searchbar_wrapper">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search book"
        className="searchBar"
      />
      <button onClick={() => searchHandler()} className="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
