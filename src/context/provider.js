import React from 'react';
import PropTypes from 'prop-types';
import PlanetTableContext from './context';
import getAllPlanetsFromAPI from '../services/starWarsAPI';
import useTableMethods from '../hooks/useTableMethods';
import useStarWarsAPI from '../hooks/useStarWarsAPI';

function PlanetTableProvider({ children }) {
  const fetchData = useStarWarsAPI(getAllPlanetsFromAPI);
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
