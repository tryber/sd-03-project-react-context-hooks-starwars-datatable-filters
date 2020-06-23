import React from 'react';
import PropTypes from 'prop-types';
import PlanetTableContext from './context';
import getAllPlanetsFromAPI from '../services/starWarsAPI';
import { useTableMethods, useFetchData } from '../hooks';

function PlanetTableProvider({ children }) {
  const fetchData = useFetchData(getAllPlanetsFromAPI);
  const filterMethods = useTableMethods();

  const context = {
    fetchData,
    filterMethods,
  };

  return (
    <PlanetTableContext.Provider value={context}>
      {children}
    </PlanetTableContext.Provider>
  );
}

PlanetTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetTableProvider;
