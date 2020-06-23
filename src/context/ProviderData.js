import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/starWarsAPI';

function ProviderData({ children }) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  const handleNameFilter = (value) => {
    setFilters((currentFilters) => ({
      ...currentFilters, filterByName: { name: value },
    }));
  };

  const handlePlanetsFailure = (err) => {
    setIsFetching(false);
    setError(err.message);
  };

  const handlePlanetsSuccess = (response) => {
    const { results } = response;
    setIsFetching(false);
    setData(results);
  };
  const fetchPlanetsData = () => {
    if (isFetching) return;
    setIsFetching(true);
    fetchPlanets()
      .then(handlePlanetsSuccess, handlePlanetsFailure);
  };

  const handleSelectColumn = ({ column, comparison, value }) => {
    setFilters((currentFilters) => ({
      ...currentFilters, filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    }));
  }

  const context = {
    getPlanetsData: fetchPlanetsData,
    setFilters,
    setData,
    handleNameFilter,
    handleSelectColumn,
    data,
    isFetching,
    error,
    filters,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

ProviderData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderData;
