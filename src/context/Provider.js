import React, {
  useReducer,
  useState,
} from 'react';
import StarWarsContext from './StarWarsContext';
import SW_API from '../services/swAPI';
import filters from '../reducers/filters';
import actionFilterNames from '../store/actions/actionFilterNames';
import actionAddFilterValues from '../store/actions/actionAddFilterValues';
import actionRemoveFilterValues from '../store/actions/actionRemoveFilterValues';
import actionSortFilter from '../store/actions/actionSortFilter';

const Provider = ({ children }) => {
  const [
    stateFetch,
    setStateFetch,
  ] = useState({
    loading: false,
    data: [],
    error: '',
  });

  const requestAPI = () =>
    setStateFetch((state) => {
      return {
        ...state,
        loading: true,
      };
    });

  const receiveSuccess = (json) => {
    const data = json.results;
    data.forEach((planet, index) => {
      delete data[index].residents;
    });
    setStateFetch((state) => {
      return {
        ...state,
        data,
        loading: false,
      };
    });
  };

  const receiveFailure = (error) => {
    setStateFetch((state) => {
      return {
        ...state,
        error,
        loading: false,
      };
    });
  };

  const fetchPlanets = async () => {
    await requestAPI();
    return SW_API().then(
      (json) => receiveSuccess(json),
      (error) =>
        receiveFailure(error.message),
    );
  };

  const [
    stateFilters,
    dispatch,
  ] = useReducer(filters, {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
    order: {
      column: 'name',
      sort: 'ASC',
    },
    options: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });

  const filterNames = (name) => {
    return actionFilterNames(name);
  };

  const addFilter = (
    column,
    comparison,
    value,
  ) => {
    return actionAddFilterValues(
      column,
      comparison,
      value,
    );
  };

  const removeFilter = (column) => {
    return actionRemoveFilterValues(
      column,
    );
  };

  const sortFilter = (order) => {
    return actionSortFilter(order);
  };

  const context = {
    stateFetch,
    stateFilters,
    fetchPlanets,
    filterNames,
    addFilter,
    removeFilter,
    sortFilter,
    dispatch,
  };
  return (
    <StarWarsContext.Provider
      value={context}
    >
      {children}
    </StarWarsContext.Provider>
  );
};

export default Provider;
