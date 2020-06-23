import React, {useState} from 'react'

import StarWarsContext from './StarWarsContext'

export default function Provider({children}) {
  const [planetsAPIreq, setPlanetsAPIreq] = useState('')
  const contextValue = {
    planetsAPIreq,
    setPlanetsAPIreq,
  };
  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  )
}
