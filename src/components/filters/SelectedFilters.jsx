import React, { useContext } from 'react';
import PlanetTableContext from '../../context/context';

const SelectedFilters = () => {
  const {
    filterMethods: {
      filters: { filterByNumericValues },
      removeFilter,
    },
  } = useContext(PlanetTableContext);
  return (
    <div>
      <h3>Filtros Ativos</h3>
      {filterByNumericValues
        && filterByNumericValues.map((filter) => (
          <p key={filter.column} data-testid="filter">
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <button type="button" onClick={() => removeFilter(filter)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
};

export default SelectedFilters;
