import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext();

FiltersContext.displayName = 'FiltersContext';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  avaliableFilters: [
    { name: 'population', avaliable: true },
    { name: 'orbital_period', avaliable: true },
    { name: 'diameter', avaliable: true },
    { name: 'rotation_period', avaliable: true },
    { name: 'surface_water', avaliable: true },
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(INITIAL_STATE);

  const setFilterByName = (name) => {
    setFilters((stateAtual) => ({...stateAtual, filterByName: { name }}))
  }

  const context = {
    filters,
    setFilters,
    setFilterByName,
  }

  return (
    <FiltersContext.Provider value={context}>
      { children }
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FiltersProvider;
