import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterByNameInput = () => {
  const { filterByText } = useContext(StarWarsContext);
  return (
    <div>
    <h2>Pesquisar um planeta</h2>
    <input
    type="text"
    name="filter-by-name"
    id="filter-by-name"
    data-testid="name-filter"
    placeholder="Nome do planeta"
    onChange={(event) => filterByText(event.target.value)}
    />
    </div>
  );
}


export default FilterByNameInput;
