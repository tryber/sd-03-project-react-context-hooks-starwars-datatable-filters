import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetTableContext from './context';
import getAllPlanetsFromAPI from '../services/starWarsAPI';
import useTableMethods from '../hooks/useTableMethods';

function PlanetTableProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const filterMethods = useTableMethods();

  const getPlanetsInfo = () => {
    if (loading) return;
    setLoading(true);
    getAllPlanetsFromAPI().then(
      (response) => {
        setData(response.results);
        setLoading(false);
      },
      (response) => {
        setError(response.message);
        setLoading(false);
      },
    );
  };

  const context = {
    data,
    error,
    loading,
    setData,
    setLoading,
    getPlanetsInfo,
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
