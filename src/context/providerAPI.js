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

function Provider({ children }) {
  const [activeFilter, setActiveFIlter] = useState(filters);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ results: [] });

  const changeFilterName = (search) => {
    setActiveFIlter({ ...activeFilter, filterByName: { name: search } });
  };

  const changeFilterNumeric = (search, helper) => {
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

  const APISuccess = (elem) => {
    setData(elem);
    setLoading(false);
  };

  const callAPI = () => {
    if (loading) return;
    setLoading(true);
    RootAPI().then((elem) => APISuccess(elem));
  };

  const contextSearch = {
    activeFilter,
    setActiveFIlter,
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
