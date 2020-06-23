import React, {useState} from 'react';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({children}) => {
  const
  return (
    <StarWarsContext.Provider value={}>
      {children}
    </StarWarsContext.Provider>
  )
}

export default StarWarsProvider;