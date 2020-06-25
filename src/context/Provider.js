import React from 'react'

import StarWarsContext from './StarWarsContext';

export default function Provider({children}) {
  return (
    <StarWarsContext.Provider>
      {children}
    </StarWarsContext.Provider>
  )
}
