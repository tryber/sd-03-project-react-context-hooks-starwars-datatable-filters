import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ListFilters = () => {
  const { filters, setFilterByNumericValues } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const clearFilter = (arrayIndex) => {
    const result = [...filterByNumericValues];
    result.splice(arrayIndex, 1);
    if (result.length === 0) {
      setFilterByNumericValues([{ column: '', comparison: '', value: '' }]);
    } else {
      setFilterByNumericValues(result);
    }
  };

  return (
    filterByNumericValues.map(({ column, comparison, value }, index) => {
      if (column && comparison && value) {
        return (
          <div key={`${column} Filter`} data-testid="filter">
            <span>{`Filter ${index}: ${column} ${comparison} ${value}`}</span>
            <button onClick={() => clearFilter(index)}>X</button>
          </div>
        );
      }
      return undefined;
    })
  );
};

export default ListFilters;
