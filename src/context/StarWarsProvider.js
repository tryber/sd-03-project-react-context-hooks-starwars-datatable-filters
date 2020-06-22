import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import SW_API from '../services/SW_API';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [filters, setFilters] = useState();
  const [] = useState();
  const [] = useState();
  const [] = useState();

  const requestAPI = () => setLoading(true);

  const receiveSuccess = (json) => {
    const data = json.results;
    data.forEach((planet, index) => { delete data[index].residents; });
    setData(data)
    setLoading(false)
  };


  const receiveFailure = (error) => {
    setError(error);
    setLoading(false);
  };

  const fetchPlanets = () => {
    requestAPI();
    return SW_API()
      .then(
        (json) => receiveSuccess(json),
        (error) => receiveFailure(error.message),
      );
  }

  const INICIAL_FILTERS = {
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
      column: 'Name',
      sort: 'ASC',
    },
    options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  };


  const filters = (state = INICIAL_STATE, action) => {
    switch (action.type) {
      case types.FILTER_NAMES:
        return filterNames(state, action.name);
      case types.ADD_FILTER_VALUE:
        return addFilter(state, action.column, action.comparison, action.value);
      case types.REMOVE_FILTER_VALUE:
        return removeFilter(state, action.column);
      case types.SORT_FILTER:
        return sortFilter(state, action.order);
      default:
        return state;
    }
  };






  const filterNames = (name) => {

    name,
});

  const context = {
    loading,
    data,
    error,
    fetchPlanets: () => fetchPlanets,
  }

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  )
}

export { StarWarsProvider as Provider };
