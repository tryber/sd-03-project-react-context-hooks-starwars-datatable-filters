import React, { useContext, useEffect, useState } from 'react';
// import FiltersContext from '../context/FiltersContext';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilters, filters, data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    setData(data.filter((planet) => planet.name.includes(filters.filterByName.name)))
  }, [filters.filterByName.name]);
  console.log('FilterByName:', filters.filterByName.name);
  return(
    <form>
    <input
      onChange={({ target: { value }}) => setFilters((currentState) => ({...currentState, filterByName: { name: value }}))}
      data-testid="name-filter"
      type="text"
      placeholder="Filtro"
      value={filters.filterByName.name}
    />
  </form>
  );
}

export default Filters;
