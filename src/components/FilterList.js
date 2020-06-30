import React, { useContext } from 'react';
import { StarWarsContext } from '../Hooks/starWarsContext';

function FilterList() {
  const {
    filters: {
      filterByNumericValues: numericFilters,
    },
    removeSelectedFilter,
  } = useContext(StarWarsContext);

  if (numericFilters.length !== 0) {
    return (
      <div>
        {numericFilters.map((filter) =>
          <p key={filter.column} data-testid="filter">
            <button type="button" onClick={() => removeSelectedFilter(filter)}>
              X
              </button>
            <span>{`${filter.column} `}</span>
            <span>{`${filter.comparison} `}</span>
            <span>{filter.value}</span>
          </p>,
        )}
      </div>
    );
  }
  return (
    <p>No Filter Aplied</p>
  );
}

export default FilterList;
