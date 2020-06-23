import React, {useState} from 'react'

import StarWarsContext from './StarWarsContext';

export default function Provider({children}) {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  const changeFilterByName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  }

  const contextValue = {
    filters,
    changeFilterByName,
  };
  
  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  )
}
