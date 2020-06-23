import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const initialState = {
  filterByName: {
    name: '',
  }
}

const StarWarsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [filters, setFilters] = useState(initialState);

  const getPlanets = (url) => new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((dat) => resolve(dat))
      .catch((err) => reject(err));
  });

  const filterByName = (name) => {
    return setFilters({ ...filters, filterByName: {name}})
  }

  const updateData = (info) => {
    setData([...info]);
  };

  const updateError = (err) => {
    setError([...err]);
  };

  const planetsContext = {
    data,
    getPlanets,
    updateData,
    updateError,
    error,
    filterByName,
    filters,
  };

  return (
    <StarWarsContext.Provider value={planetsContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsContextProvider as Provider };

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
