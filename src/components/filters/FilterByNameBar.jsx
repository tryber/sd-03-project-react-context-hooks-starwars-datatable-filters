import React, { useContext } from 'react';
import { PlanetTableContext } from '../../context';

const FilterByNameBar = () => {
  const {
    filterMethods: { setFilterByName },
  } = useContext(PlanetTableContext);
  return (
    <div>
      <input
        type="text"
        name="filter-by-name"
        id="filter-by-name"
        data-testid="name-filter"
        placeholder="Digite o nome do planeta"
        onChange={(event) => setFilterByName(event.target.value)}
      />
    </div>
  );
};

export default FilterByNameBar;
