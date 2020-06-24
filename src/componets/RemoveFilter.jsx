import React from 'react';
import { useContext } from 'react';
import { starWarsContext } from '../context/starWarsContext';

const RemoveFilter = () => {
  const {
    allFilters: {
      filters: { filterByNumericValues },
      removeFilter },
  } = useContext(starWarsContext);

  const remove = (lista) => (
    <p
      data-testid="filter"
    >
      <span>{lista.column}</span>
      <span>{lista.comparison}</span>
      <span>{lista.value}</span>
      <button
        type="button"
        onClick={() => removeFilter(lista)}
      >
        x
        </button>
    </p>
  );

  const infoFilters = filterByNumericValues.filter((e) => e.column !== '');

  return (
    <div>
      <h1>Remover</h1>
      {infoFilters.map((e) => remove(e))}
    </div>
  );
};

export default RemoveFilter;
