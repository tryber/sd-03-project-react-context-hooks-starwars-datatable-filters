import React, { createContext, useState } from 'react';
import { getAllPlanetsFromAPI } from '../services/planetsAPI';

const StarWarsContext = createContext();

const initial_filter_state = {
  filterByName: {
    name: ''
  }
};

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [textFilter, setTextFilter] = useState(initial_filter_state);

  const filterByText = (name) => {
    setTextFilter({filterByName: { name }});
    setIsFetching(false);
  }

  const handleFetchSuccess = (json) => {
    const planets = json.results;
    setData([...planets]);
    setIsFetching(false);
  }

  const handleFetchError = (error) => {
    setData(error);
    setIsFetching(false);
  }

  const fetchPlanets = (data) => {
    if (isFetching) return;
    setIsFetching(true);
    getAllPlanetsFromAPI()
    .then(handleFetchSuccess, handleFetchError);
  };

  const context = { data, isFetching, fetchPlanets, filterByText, textFilter };

  return (
      <StarWarsContext.Provider value={context}>
        {children}
      </StarWarsContext.Provider>
    );
}

export { StarWarsContext, Provider };
