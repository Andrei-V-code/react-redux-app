import React from 'react';

import './filter.css';

interface PropsFilter {
  filterType: string;
}

const Filter: React.FC<PropsFilter> = (props) => (
  <div className="filter_wrapper">
    <h3>{props.filterType}</h3>
  </div>
);

export default Filter;
