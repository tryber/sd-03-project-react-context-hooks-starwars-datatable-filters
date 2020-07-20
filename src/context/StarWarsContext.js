import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

StarWarsContext.displayName = 'StarWarsContext';

const StarwarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
  }

  return (
    <StarWarsContext.Provider value={context}>
      { children }
    </StarWarsContext.Provider>
  )
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StarwarsProvider;
