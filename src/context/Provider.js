import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsAPI from '../services/getPlanetsAPI';

const Provider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const receivePlanetsSuccess = (data) => {
    setPlanets(data.results);
    setIsFetching(false);
  };

  const receivePlanetsError = (errorMessage) => {
    setError(errorMessage);
    setIsFetching(false);
  };

  const fetchPlanets = () => {
    setIsFetching(true);

    getPlanetsAPI()
    .then(
      receivePlanetsSuccess,
      receivePlanetsError,
    );
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    data: {
      isFetching,
      planets,
      error,
    },
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
      order,
    },
    setName,
    setFilterByNumericValues,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
