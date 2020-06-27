import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://swapi-trybe.herokuapp.com/api/planets/')
  const [error, setError] = useState('');

  const dataContext = {
    loading,
    setLoading,
    data,
    setData,
    url,
    setUrl,
    error,
    setError
  };

  return (
    <DataContext.Provider value={dataContext}>
      {children}
    </DataContext.Provider>
  )
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default DataProvider;
