import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterSelector from './FilterSelector';

export default function () {
  const { filters, setNameFilter, filteredData } = useContext(StarWarsContext);
  console.log('passando por aqui:');
  return filteredData.length > 0 && (
    <div>
      <input value={filters.filterByName.name} onChange={(e) => setNameFilter(e.target.value)} />
      <FilterSelector />
    </div>
  );
}
