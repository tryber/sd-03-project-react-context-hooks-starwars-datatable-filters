import React, { useContext } from 'react';
import FilterContext from '../context/toFilter/FiltersContext';

function FilterList() {
  const { filters: { filterByNumericValues }, handleExcludeFilter } = useContext(FilterContext);
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={column}>
          <ul>
            <li>column: {`${column}`}</li>
            <li>comparison: {`${comparison}`}</li>
            <li>value: {`${value}`}</li>
          </ul>
          <button onClick={() => handleExcludeFilter(column)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterList;
