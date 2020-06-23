import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersContext from './FiltersContext';

function ProviderFilters({ children }) {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const handleNameFilter = (value) => {
    setFilters((currentFilters) => ({
      ...currentFilters, filterByName: { name: value },
    }));
  };

  const handleSelectColumn = ({ column, comparison, value }) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        }
      ],
    }));
  };

  const context = {
    filters,
    setFilters,
    handleNameFilter,
    handleSelectColumn,
  };
  return (
    <FiltersContext.Provider value={context}>
      {children}
    </FiltersContext.Provider>
  );
}

ProviderFilters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderFilters;
