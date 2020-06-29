import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RootAPI from '../service/RootAPI';
import contextAPI from './contextAPI';

const filters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      comparasion: '',
      column: '',
      value: '',
    },
  ],
};

const handleNumericFilter = (search, helper, activeFilter, setActiveFIlter) => {
  if (helper === 'add') {
    setActiveFIlter({
      ...activeFilter,
      filterByNumericValues: [...activeFilter.filterByNumericValues, search],
    });
  }
  if (helper === 'remove') {
    setActiveFIlter({
      ...activeFilter,
      filterByNumericValues: activeFilter.filterByNumericValues
        .filter((elem) => elem.column !== search.column),
    });
  }
};

function Provider({ children }) {
  const [activeFilter, setActiveFIlter] = useState(filters);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ results: [] });

  const changeFilterName = (search) => {
    setActiveFIlter({ ...activeFilter, filterByName: { name: search } });
  };

  const changeFilterNumeric = (search, helper) => {
    handleNumericFilter(search, helper, activeFilter, setActiveFIlter);
  };

  const APISuccess = (elem) => {
    setData(elem);
    setLoading(false);
  };

  const APIFailure = (elem) => {
    setError(elem.message);
    setLoading(false);
  };

  const callAPI = () => {
    if (loading) return;
    setLoading(true);
    RootAPI().then((elem) => APISuccess(elem), (wrong) => APIFailure(wrong));
  };

  const contextSearch = {
    activeFilter,
    setActiveFIlter,
    error,
    setError,
    loading,
    setLoading,
    data,
    setData,
    changeFilterName,
    changeFilterNumeric,
    callAPI,
  };

  return (
    <contextAPI.Provider value={contextSearch}>{children}</contextAPI.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
