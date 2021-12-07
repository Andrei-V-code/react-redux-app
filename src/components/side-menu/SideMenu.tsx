import React from 'react';

import Filter from './filter/Filter';
import RadioButton from './filter/radio-button/RadioButton';

import './side-menu.css';

interface PropsFunc {
  sortCheckedBy: boolean;
  sortCheckedPrintType: boolean;
  sortHandlerBy: any;
  sortHandlerPrintType: any;
  resetFilters: any;
}

const SideMenu: React.FC<PropsFunc> = ({
  sortHandlerPrintType,
  sortHandlerBy,
  sortCheckedPrintType,
  sortCheckedBy,
  resetFilters,
}) => {
  return (
    <div className="side_wrapper">
      <Filter filterType="SORT BY:" />
      <RadioButton
        htmlFor="relevance"
        filter="Relevance"
        radioButtonHandler={sortHandlerBy}
        name="sortBy"
        id="relevance"
        value="relevance"
        checked={sortCheckedBy}
      />
      <RadioButton
        htmlFor="newest"
        filter="Newest"
        radioButtonHandler={sortHandlerBy}
        name="sortBy"
        id="newest"
        value="newest"
        checked={undefined}
      />
      <Filter filterType="PRINT TYPE:" />
      <RadioButton
        htmlFor="all"
        filter="All"
        radioButtonHandler={sortHandlerPrintType}
        name="printType"
        id="all"
        value="all"
        checked={sortCheckedPrintType}
      />
      <RadioButton
        htmlFor="books"
        filter="Books"
        radioButtonHandler={sortHandlerPrintType}
        name="printType"
        id="books"
        value="books"
        checked={undefined}
      />
      <RadioButton
        htmlFor="magazines"
        filter="Magazines"
        radioButtonHandler={sortHandlerPrintType}
        name="printType"
        id="magazines"
        value="magazines"
        checked={undefined}
      />
      <button className="resetButton" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default SideMenu;
