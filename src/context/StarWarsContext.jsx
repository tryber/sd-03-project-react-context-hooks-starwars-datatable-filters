import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext(null);

const filterTemplate = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filters, setFilters] = useState(filterTemplate);

  function changeFilterByName(name) {
    setFilters({ ...filters, filterByName: { name } });
  }

  function changeNumericFilter(type, filter) {
    if (type === 'add') {
      setFilters({ ...filters, filterByNumericValues: [...filters.filterByNumericValues, filter] });
    } else if (type === 'del') {
      setFilters({
        ...filters,
        filterByNumericValues: filters.filterByNumericValues
          .filter((f) => f.column !== filter.column),
      });
    }
  }

  function changeOrderFilter(order) {
    setFilters({ ...filters, order });
  }

  const store = {
    setPlanetsFiltered,
    planetsFiltered,
    planets,
    setPlanets,
    filters,
    changeFilterByName,
    changeNumericFilter,
    changeOrderFilter,

  };

  return <StarWarsContext.Provider value={store}>{children}</StarWarsContext.Provider>;
};

provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default provider;
