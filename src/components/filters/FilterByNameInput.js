import React from 'react';

const FilterByNameInput = ({ onChange }) => (
  <div>
    <h2>Pesquisar um planeta</h2>
    <input
      type="text"
      name="filter-by-name"
      id="filter-by-name"
      data-testid="name-filter"
      placeholder="Nome do planeta"
      onChange={onChange}
    />
  </div>
);

export default FilterByNameInput;
