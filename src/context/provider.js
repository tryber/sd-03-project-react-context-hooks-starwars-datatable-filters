import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetTableContext from './context';

function PlanetTableProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableFilters, setTableFilters] = useState({ filters: {} });
  const context = {
    data,
    loading,
    tableFilters,
    setData,
    setLoading,
    setTableFilters,
  };
  return <PlanetTableContext.Provider value={context}>{children}</PlanetTableContext.Provider>;
}

PlanetTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetTableProvider;
