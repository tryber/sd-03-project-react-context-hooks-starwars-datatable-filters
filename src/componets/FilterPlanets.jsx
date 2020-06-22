import React from 'react';
import { useContext } from 'react';
import FilterByNumeric from './FilterByNumeric';
import { starWarsContext } from '../context/starWarsContext';

const FilterPlanets = () => {
  const { getPlanetByname } = useContext(starWarsContext);
  return (
    <div>
      <FilterByNumeric />
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => getPlanetByname(e.target.value)}
      />
    </div>
  );
}

export default FilterPlanets;
