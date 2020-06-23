import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersContext from './FiltersContext';

function ProviderData({ children }) {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });


  const context = {
    filters,
    setFilters,
  };
  return (
    <FiltersContext.Provider value={context}>
      {children}
    </FiltersContext.Provider>
  );
}

ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderData;
