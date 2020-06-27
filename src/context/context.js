import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

MyContext.displayName = 'MyContext';

const MyProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [usedFilters, setUsedFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const context = {
    filters,
    setFilters,
    usedFilters,
    setUsedFilters,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = { children: PropTypes.node.isRequired };

export default MyProvider;
