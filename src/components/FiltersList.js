import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FiltersList = () => {
  const { filterByNumericValues, removeFilter } = useContext(StarWarsContext);
  if (filterByNumericValues.length === 0 || filterByNumericValues[0].column === '') return false;
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <p data-testid="filter">
          {`Filtro aplicado: ${column} | ${comparison} | ${value} `}
          <button
            key={column}
            type="button"
            value="X"
            onClick={() => removeFilter(column)}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}

export default FiltersList;