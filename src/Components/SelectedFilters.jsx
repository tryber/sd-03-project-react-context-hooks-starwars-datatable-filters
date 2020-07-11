import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const SelectedFilters = () => {
  const { filters, removeFilter } = useContext(StarWarsContext);
  return filters.filterByNumericValues.length > 0 && filters.filterByNumericValues.map((
    { column, comparison, value },
  ) => (
    <div key={column} data-testid="filter">
      {`${column} ${comparison} ${value}`}
      <button type="button" onClick={() => removeFilter(column)}>X</button>
    </div>
  ));
};

export default SelectedFilters;
