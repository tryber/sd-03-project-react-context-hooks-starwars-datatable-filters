import React, { useContext } from 'react';
import { starWarsContext } from '../context/starWarsContext';
import FilterByNumeric from './FilterByNumeric';

const FilterPlanets = () => {
  const { allFilters: { setFiltersByName } } = useContext(starWarsContext);
  return (
    <div>
      <FilterByNumeric />
      <h3>Filter Planets</h3>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => setFiltersByName(event.target.value)}
      />
    </div>
  );
};

export default FilterPlanets;
