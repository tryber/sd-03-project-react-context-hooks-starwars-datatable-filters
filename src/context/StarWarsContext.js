import React, { createContext, useState } from 'react';
const axios = require('axios');

const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  let [error, setError] = useState('');

  const getPlanets = (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response.data);
      }).catch((error) => reject(error));
    });
  };

  const updateData = (info) => {
    setData([...info]);
  }

  const updateError = (err) => {
    setError(error = err);
  }

  const planetsContext = {
    data,
    getPlanets,
    updateData,
    updateError,
    error,
  };

  return (
    <StarWarsContext.Provider value={planetsContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsContextProvider as Provider };
