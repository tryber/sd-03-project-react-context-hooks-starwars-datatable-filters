import React, { useContext } from 'react';

import { filtersContext } from '../context/Filters';
import typeName from '../actions/SearchTextAction';

function SearchBox() {
  const [{ filterByName: { name: searchText } }, dispatch] = useContext(filtersContext);

  return (
    <label htmlFor="search-text-input" className="container">
      <span>Search By Name</span>
      <input
        className="radius-border"
        data-testid="name-filter"
        id="search-text-input"
        type="text"
        value={searchText}
        onChange={({ target: { value } }) => dispatch(typeName(value))}
      />
    </label>
  );
}

export default SearchBox;
