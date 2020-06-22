import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

const StarWarsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setfetchError] = useState('');
  const fetchData = () => fetch(URL)
    .then(async (resp) => {
      console.log('tentaste');
      setIsFetching(true);
      try {
        const json = await resp.json();
        return setData(json.results);
      } catch (e) {
        setfetchError(e);
      }
      return setIsFetching(false);
    });

  const context = {
    fetchData,
    fetchError,
    data,
    isFetching,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: propTypes.elementType.isRequired,
};

export default StarWarsContext;
