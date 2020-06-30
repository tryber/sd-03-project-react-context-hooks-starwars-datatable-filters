import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../services/api';

const StarContext = createContext();

const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  const resquestPlanets = () => setIsFetching(true);

  const successPlanets = (results) => {
    setData(results);
    setIsFetching(false);
  };

  const failurePlanets = (erro) => {
    setError(erro);
    setIsFetching(false);
  };

  const requestFetch = () => {
    resquestPlanets();

    return apiPlanets().then(
      (json) => successPlanets(json.results),
      (erro) => failurePlanets(erro),
    );
  };

  const filterByName = (name) => (
    setFilters((state) => ({
      ...state,
      filterByName: { name },
    }))
  );

  const filterByNumericValues = (column, comparison, value) => (
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    }))
  );

  const removeFilterNumeric = (obj) => (
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((filter) => filter !== obj),
      ],
    }))
  );

  const orderColumns = (column, sort) => (
    setFilters((state) => ({
      ...state,
      order: { column, sort },
    }))
  );

  const context = {
    data,
    isFetching,
    error,
    filters,
    requestFetch,
    filterByName,
    filterByNumericValues,
    removeFilterNumeric,
    orderColumns,
  };

  return (
    <StarContext.Provider value={context}>
      {children}
    </StarContext.Provider>
  );
};

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarContext, StarProvider as Provider };
