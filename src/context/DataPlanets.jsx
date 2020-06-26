import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const dataPlanetsContext = createContext({
  isFetching: true,
  error: '',
  data: [],
  headers: [],
});

function DataPlanetsProvider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [error, setError] = useState('');

  const state = { isFetching, data, error, headers };

  const dispatch = { setIsFetching, setData, setError, setHeaders };

  return (
    <dataPlanetsContext.Provider value={[state, dispatch]}>
      {children}
    </dataPlanetsContext.Provider>
  );
}

DataPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default DataPlanetsProvider;
