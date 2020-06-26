import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterByNameInput = () => {
  const { filterMethods: { setFilterByName } } = useContext(StarWarsContext);
  return (
    <div>
      <h2>Pesquisar um planeta</h2>
      <input
        type="text"
        name="filter-by-name"
        id="filter-by-name"
        data-testid="name-filter"
        placeholder="Nome do planeta"
        onChange={(event) => setFilterByName(event.target.value)}
      />
    </div>
  );
};

export default FilterByNameInput;
