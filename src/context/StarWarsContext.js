import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import requestData from '../services/Request';
import useDataHandlers from './useDataHandler';
import useFilterHandler from './useFilterHandler';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const filterData = useFilterHandler();
  const tableData = useDataHandlers(requestData);

  const STContext = {
    filterData,
    tableData,
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
