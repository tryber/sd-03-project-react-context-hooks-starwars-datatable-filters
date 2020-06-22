import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const getPlanets = (url) => (
    new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response.data);
      }).catch((err) => reject(err));
    })
  );

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
  };

  return (
    <StarWarsContext.Provider value={planetsContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsContextProvider as Provider };

StarWarsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
