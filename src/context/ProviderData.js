import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/starWarsAPI';

function ProviderData({ children }) {
  const [ isFetching, setIsFetching ] = useState();
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState();
  const fetchPlanetsData = () => {
    if (isFetching) return;
    setIsFetching(true);
    fetchPlanets()
      .then(handlePlanetsSuccess, handlePlanetsFailure);
  }

  const handlePlanetsFailure = (error) => {
    setIsFetching(false);
    setError(error.message);
  }

  const handlePlanetsSuccess = (response) => {
    const { results  } = response;
    setIsFetching(false);
    setData(results);
  }

  const context = {
    getPlanetsData: fetchPlanetsData,
    data,
  }
  const { children } = this.props;
  return(
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

export default ProviderData;