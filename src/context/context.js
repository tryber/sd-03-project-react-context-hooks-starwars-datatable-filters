import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

MyContext.displayName = 'MyContext';

const MyProvider = ({ children }) => {
  const [numericValues, setNumericValues] = useState([]);
  const [nameFilters, setNameFilters] = useState({ name: '' });
  const [usedFilters, setUsedFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const context = { 
    numericValues,
    setNumericValues,
    nameFilters,
    setNameFilters,
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
