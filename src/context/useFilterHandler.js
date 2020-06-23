import { useState } from 'react';

const useFilterHandler = () => {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const setFilterByName = (name) => setFilters({
    ...filters,
    filterByName: { name },
  });

  const setFilterByNumericValues = ({ column, comparison, value }) => setFilters({
    ...filters,
    filterByNumericValues: [
      ...filters.filterByNumericValues, { column, comparison, value },
    ],
  });

  const setRemoveFilters = (value) => setFilters({
    ...filters,
    filterByNumericValues: [
      ...filters.filterByNumericValues.filter((filter) => filter !== value),
    ],
  });

  return {
    filters,
    setFilterByName,
    setFilterByNumericValues,
    setRemoveFilters,
  };
};

export default useFilterHandler;
