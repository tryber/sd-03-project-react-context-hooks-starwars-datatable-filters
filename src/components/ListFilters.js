import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ListFilters = () => {
  const { filters, setColumn, setComparison, setValue } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const clearFilter = (arrayIndex) => {
    setColumn('');
    setComparison('');
    setValue('');
    console.log(index);
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
