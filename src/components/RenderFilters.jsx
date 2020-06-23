import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const RenderFilters = () => {
  const {
    filterData: { filters, setFilterByName },
  } = useContext(StarWarsContext);
  return (
    <label
      htmlFor="nameFilter"
    >
      Nome:&nbsp;
      <input
        id="nameFilter"
        data-testid="name-filter"
        onChange={(e) => setFilterByName(e.target.value)}
        type="text"
        value={filters.filterByName.name}
      />
    </label>
  );
};

export default RenderFilters;
