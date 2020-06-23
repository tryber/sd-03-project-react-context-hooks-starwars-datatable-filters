import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsAPI from '../services/getPlanetsAPI';

/* objeto a ser retornado yes
contextValue = {
  data: {
    isFetching: false,
    planets: [],
    error: '',
  }
  filters: {
    filterByName: {
      name: ''
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ]
  }
}

*/

const Provider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const receivePlanetsSuccess = (data) => {
    setIsFetching(false);
    setPlanets(data.results);
  };

  const receivePlanetsError = (errorMessage) => {
    setIsFetching(false);
    setError(errorMessage);
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
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
    clearFilter: (index) => console.log(index),
    setName,
    setColumn,
    setComparison,
    setValue,
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
