import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetTableContext from './context';
import getAllPlanetsFromAPI from '../services/starWarsAPI';

function PlanetTableProvider({ children }) {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    ...initialFilters,
  });

  const getPlanetsInfo = () => {
    if (loading) return;
    setLoading(true);
    getAllPlanetsFromAPI().then(
      (response) => {
        setData(response.results);
        setLoading(false);
      },
      (response) => {
        setError(response.message);
        setLoading(false);
      },
    );
  };

  const setFilterByName = (name) => setFilters({
    ...filters,
    filterByName: name,
  });

  const setFilterByNumericValues = (...params) => setFilters({
    ...filters,
    filterByNumericValues: [...filters.filterByNumericValues, ...params],
  });

  const setOrderFilter = ({ column, sort }) => setFilters({ ...filters, order: { column, sort } });

  const removeFilter = (value) => setFilters({
    ...filters,
    filterByNumericValues: [
      ...filters.filterByNumericValues.filter((filter) => filter !== value),
    ],
  });

  const context = {
    data,
    error,
    loading,
    filters,
    setData,
    setLoading,
    setFilters,
    getPlanetsInfo,
    setFilterByName,
    setFilterByNumericValues,
    setOrderFilter,
    removeFilter,
  };
  return (
    <PlanetTableContext.Provider value={context}>
      {children}
    </PlanetTableContext.Provider>
  );
}

PlanetTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetTableProvider;
