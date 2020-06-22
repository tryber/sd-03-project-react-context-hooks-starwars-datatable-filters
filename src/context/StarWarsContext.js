import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

const StarWarsContext = createContext();

const StarWarsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getPlanets = (url) => (
    new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response.data);
      })
    })
  );

  const updateData = (info) => {
    setData([...info]);
  };

  const planetsContext = {
    data,
    getPlanets,
    updateData,
  };

  return (
    <StarWarsContext.Provider value={planetsContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsContextProvider as Provider };

StarWarsContext.protoTypes = {
  children: PropTypes.node.isRequired,
};
