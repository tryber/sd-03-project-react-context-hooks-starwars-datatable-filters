import React, { useContext } from 'react';
import { PlanetTableContext } from '../../context';

const SelectedFilters = () => {
  const {
    filterMethods: {
      filters: { filterByNumericValues },
      removeFilter,
    },
  } = useContext(PlanetTableContext);
  return (
    <div className="tags are-medium">
      <h3>Filtros Ativos</h3>
      {filterByNumericValues
        && filterByNumericValues.map((filter) => (
          <section key={filter.column} data-testid="filter" className="box">
            <span className="tag is-light">{filter.column}</span>
            <span className="tag is-light">{filter.comparison}</span>
            <span className="tag is-light">{filter.value}</span>
            <button
              className="button is-text is-small"
              type="button"
              onClick={() => removeFilter(filter)}
            >
              X
            </button>
          </section>
        ))}
    </div>
  );
};

export default SelectedFilters;
