import React, { createContext, useState } from 'react';
import request from '../service/requestData';

const StarWarsContext = createContext();

const TableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [isRequesting, setIsRequesting] = useState(false);

  // Fetch table from endpoint
  getTable = () => {
    if (!isRequesting) {
      setIsRequesting(true);
      request().then(
        (res) => { 
          setData(res.results);
          setIsRequesting(false);
        },
        (res) => {
          setErr(res.message);
          setIsRequesting(false);
        },
      );
    };
    return;
  }

  // Update name filter by user input
  const textChanged = (text) => {
    setFilterByName({ name: text });
  }

  // Salve numeric filters to the array
  const saveNumericFilters = ({ column, comparison, value }) => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value }
    ]);
  };


  const Context = {
    data,
    err,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    isRequesting,
    saveNumericFilters,
    textChanged,
  }

  return (
    <StarWarsContext.Provider value={Context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, TableProvider };
