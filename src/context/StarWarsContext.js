import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllPlanetsFromAPI } from '../services/planetsAPI';
import FilterHooks from '../hooks/FilterHooks';

const StarWarsContext = createContext();

const initialFilterState = {
  filterByName: {
    name: '',
  },
};

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [textFilter, setTextFilter] = useState(initialFilterState);

  const filterMethods = FilterHooks();

  const filterByText = (name) => {
    setTextFilter({ filterByName: { name } });
    setIsFetching(false);
  };

  const handleFetchSuccess = (json) => {
    const planets = json.results;
    setData([...planets]);
    setIsFetching(false);
  };

  const handleFetchError = (error) => {
    setData(error);
    setIsFetching(false);
  };

  const fetchPlanets = () => {
    if (isFetching) return;
    setIsFetching(true);
    getAllPlanetsFromAPI()
    .then(handleFetchSuccess, handleFetchError);
  };

  const context = {
    data,
    isFetching,
    fetchPlanets,
    filterByText,
    textFilter,
    filterMethods,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, Provider };
