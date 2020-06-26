import React from 'react';
import { createContext, useState } from 'react';

export const FilterContext = createContext(null);

function FilterProvider({ children }) {
  const [ filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const setNameFilter = (search) => setFilter(
    {...filter, filterByName: { name: search }}
    );

  const addNumericFilter = (params) => setFilter({
    ...filter,
    filterByNumericValues: [...filter.filterByNumericValues.concat(params)]
  });

  const removeNumericFilter = (toBeRemoved) => setFilter({
    ...filter, filterByNumericValues: [filter.filterByNumericValues
      .filter((item) => item !== toBeRemoved)],
  });

  const filterContext = {
    filter,
    setNameFilter,
    addNumericFilter,
    removeNumericFilter,
  }

  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
