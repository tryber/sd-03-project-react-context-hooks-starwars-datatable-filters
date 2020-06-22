import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function () {
  const { filters, setFilter } = useContext(StarWarsContext);
  return (
    <input value={filters.filterByName.name} onChange={(e) => setFilter(e.target.value)} />
  );
}
