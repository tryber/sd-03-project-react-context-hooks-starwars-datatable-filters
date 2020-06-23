import React, { useContext, useEffect, useState } from 'react';
// import FiltersContext from '../context/FiltersContext';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, data, setData, handleNameFilter } = useContext(StarWarsContext);

  useEffect(() => {
    setData(data.filter((planet) => planet.name.includes(filters.filterByName.name)))
  }, [filters.filterByName.name]);

  return(
    <form>
    <input
      onChange={(event) => handleNameFilter(event.target.value)}
      data-testid="name-filter"
      type="text"
      placeholder="Filtro"
      value={filters.filterByName.name}
    />
  </form>
  );
}

export default Filters;
