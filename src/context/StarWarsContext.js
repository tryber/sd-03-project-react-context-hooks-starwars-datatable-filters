import React, { createContext, useState } from 'react';
import request from '../service/requestData';

const StarWarsContext = createContext();

const TableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);

  getPlanets = () => {
    request().then(
      (res) => setData(res.results),
      (res) => setErr(res.message),
    );
  }

  const tableContext = {
    data,
    filters: {
      filterByName,
      filterByNumericValue,
    },
  }

  return (
    <StarWarsContext.Provider value={tableContext}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, TableProvider };
