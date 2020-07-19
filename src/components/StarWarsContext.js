import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanetsList from '../services/apiSWRequest';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setisFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [numericFilters, setnumericFilters] = useState([]);

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

  const updateNumericFilters = (newFilter) => {
    setnumericFilters([...numericFilters, newFilter]);
  };

  const removeSelectedFilter = (deletedFilter) => {
    const updatedFilters = numericFilters.filter(
      (filter) => filter !== deletedFilter,
    );
    setnumericFilters(updatedFilters);
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
      filterByNumericValues: numericFilters,
    },
    updateNameFilter,
    updateNumericFilters,
    removeSelectedFilter,
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
