import { useState } from 'react';

const initialFilters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function FilterHooks() {
  const [filters, setFilters] = useState({
    ...initialFilters,
  });

  return {
    filters,
    setFilters,
    setFilterByName: (name) => setFilters({
      ...filters,
      filterByName: { name },
    }),
    setFilterByNumericValues: (...params) => setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, ...params],
    }),

    setOrderFilter: ({ column, sort }) => setFilters({ ...filters, order: { column, sort } }),
    removeFilter: (value) => setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter !== value),
      ],
    }),
  };
}

export default FilterHooks;
