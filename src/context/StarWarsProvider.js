import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import SW_API from '../services/SW_API';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

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

  const [filterByName, setFilterByName] = useState({
    name: '',
  });

  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    },
  ]);


  const addFilter = (column, comparison, value) => {
    if (filterByNumericValues[0].column === '') {
      return setFilterByNumericValues([{
        column, comparison, value,
      }])
    } else {
      return setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }])
    }
  };

  const removeFilter = (column) => {
    const newArray = [...filterByNumericValues].filter((item) => item.column !== column);
    if (filterByNumericValues.length === 1) {
      return setFilterByNumericValues([])
    }
    return setFilterByNumericValues(newArray)
  };

  const [filterOrder, setFilterOrder] = useState({
    order: {
      column: 'Name',
      sort: 'ASC',
    }
  });

  const sortFilter = (order) => {
    setFilterOrder(order)
  };


  const context = {
    loading,
    data,
    error,
    fetchPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    addFilter,
    removeFilter,
    filterOrder,
    sortFilter,
  }

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  )
}

export { StarWarsProvider as Provider };
