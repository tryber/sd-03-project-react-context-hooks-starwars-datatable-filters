import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './contextStarWars';
import requestData from '../services/requestData';

const ProviderStarWars = ({ children }) => {
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

    return requestData().then(
      (json) => successPlanets(json.results),
      (erro) => failurePlanets(erro),
    );
  };
  
  const SetfilterByName = (name) => (
    setFilters((state) => ({
      ...state,
      filterByName: { name },
    }))   
  );

  const SetfilterByNumericValues = (column, comparison, value) => (
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    }))
  );  

  const context = {
    data,
    isFetching,
    error,
    requestFetch,
    SetfilterByName,
    SetfilterByNumericValues,
    filters,  
  };

  return (
    <ContextStarWars.Provider value={context}>
      {children}
    </ContextStarWars.Provider>
  );
};

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;