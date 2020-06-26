import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const SelectedFilters = () => {
  const {
    filterMethods: {
      filters: { filterByNumericValues },
      removeFilter,
    },
  } = useContext(StarWarsContext);
  return (
    <div className="container tags are-medium">
      <h5 className="title is-5">Filtros Ativos</h5>
      {filterByNumericValues
        && filterByNumericValues.map((filter) => (
          <section key={filter.column} data-testid="filter">
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
