import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import FilterSelector from './FilterSelector';

export default function () {
  const { filters, setNameFilter, filteredData } = useContext(StarWarsContext);
  return filteredData.length > 0 && (
    <div>
      <input
        data-testid="name-filter"
        value={filters.filterByName.name}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <FilterSelector />
    </div>
  );
}
