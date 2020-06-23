import React, { createContext, useState } from 'react';
import getPlanetsList from '../services/swapi';

const StarWarsContext = createContext();

const StarWarsProvider = ({children}) => {
  const [isFetching, setisFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlanetList = () => {
    if (isFetching) return;

    setisFetching(true);

    getPlanetsList()
      .then(handleListSuccess, handleListFailure);
  }

  const handleListSuccess = (response) => {
    const { results } = response;

    setData(results);
    setisFetching(false);
  }

  const handleListFailure = (error) => {
    const { message } = error;

    setError(message);
    setisFetching(false);
  }

  const context = {
    isFetching,
    data,
    error,
    fetchPlanetList,
  }

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider };
