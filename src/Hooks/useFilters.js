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

function useFilters() {
  const [filters, setFilters] = useState({ ...initialFilters });

  return {
    filters,
    setFilters,
    setFiltersByName: (name) => setFilters({
      ...filters,
      filterByName: { name },
    }),

    setfilterByNumericValues: (allValues) => setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [...filters.filterByNumericValues, allValues],
    })),

    removeFilter: (item) => setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...filters.filterByNumericValues.filter((elem) => elem !== item),
      ],
    })),
  };
}

export default useFilters;
