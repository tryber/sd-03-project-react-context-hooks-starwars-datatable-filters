import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanetsList from '../services/swapi';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setisFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');

  const handleListSuccess = (response) => {
    const { results } = response;

    setData(results);
    setisFetching(false);
  };

  const handleListFailure = (APIerror) => {
    const { message } = APIerror;

    setError(message);
    setisFetching(false);
  };

  const fetchPlanetList = () => {
    if (isFetching) return;

    setisFetching(true);

    getPlanetsList()
      .then(handleListSuccess, handleListFailure);
  };

  const updateNameFilter = (typedName) => {
    setName(typedName);
  };

  const context = {
    isFetching,
    data,
    error,
    fetchPlanetList,
    filters: {
      filterByName: {
        name,
      },
    },
    updateNameFilter,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider };
