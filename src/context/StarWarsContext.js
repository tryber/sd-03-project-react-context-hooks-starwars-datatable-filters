import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestData from '../services/Request';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [dataTable, setDataTable] = useState([]);
  const [errData, setErrData] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);

  // Make request to endpoint and handles isRequesting
  const requestDataTable = () => {
    if (isRequesting) return;
    setIsRequesting(true);
    requestData().then(
      // success
      (res) => {
        setDataTable(res.results);
        setIsRequesting(false);
      },
      // Failure
      (res) => {
        setErrData(res.message);
        setIsRequesting(false);
      },
    );
  };

  const STContext = {
    dataTable,
    errData,
    isRequesting,
    requestDataTable,
  };

  return (
    <StarWarsContext.Provider value={STContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider };
