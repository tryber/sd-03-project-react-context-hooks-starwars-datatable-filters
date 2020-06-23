import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../../services/starWarsAPI';

function ProviderData({ children }) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const handlePlanetsFailure = (err) => {
    setIsFetching(false);
    setError(err.message);
  };

  const handlePlanetsSuccess = (response) => {
    const { results } = response;
    setIsFetching(false);
    setData(results);
  };
  const fetchPlanetsData = () => {
    if (isFetching) return;
    setIsFetching(true);
    fetchPlanets()
      .then(handlePlanetsSuccess, handlePlanetsFailure);
  };

  const context = {
    getPlanetsData: fetchPlanetsData,
    setData,
    data,
    isFetching,
    error,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderData;
