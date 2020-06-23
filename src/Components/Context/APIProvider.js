import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { RootAPI } from '../service/RootAPI';
import APIcontext from './APIcontext';

const state = {
  filters:
    {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        }
      ]
    }
  }

function Provider({ children }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [filterSelect, setFilterSelect] = useState(state);

  const saveFilter = (input, param) => {
    const filters = {
        filterByName: {
          name: input.name,
        },
      filterByNumericValues: [
        {
          column: input.column,
          comparison: input.comparison,
          value: input.value,
        },
      ],
    };
    setFilterSelect(
      (param === 'remove')
      ? filterSelect.filters.filterByNumericValues.filter((filter) => filter !== input)
      : {...filterSelect.filters.filterByNumericValues.concat(input), filters}
    );
  };

  const fetchAPI = () => {
    if (loading) return;
    setLoading(true);

    RootAPI().then(handleSuccess, handleFailure);
  };

  const handleSuccess = (data) => {
    setData(data);
    setLoading(false);
  };

  const handleFailure = (error) => {
    setError(error.message);
    setLoading(false);
  };

  const contextValue = {
    fetchAPI,
    error,
    data,
    setData,
    loading,
    setLoading,
    filterSelect,
    setFilterSelect,
    saveFilter,
  };

  return (
    <APIcontext.Provider value={contextValue}>{children}</APIcontext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
