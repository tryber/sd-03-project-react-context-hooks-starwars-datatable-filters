import React, { useContext } from 'react';
import Tbody from './Tbody';
import Thead from './Thead';
import filterDataByNumericValue from '../functions/';
import { StarWarsContext } from '../context/StarWarsContext';

const Table = () => {
  const { data, filterMethods } = useContext(StarWarsContext);

  const {
    filterByName: { name },
    filterByNumericValues,
    order: { column, sort },
  } = filterMethods.filters;
  const filteredData = filterDataByNumericValue(
    data,
    name,
    column,
    sort,
    filterByNumericValues,
  );

  return (
    <div>
      <h1>Star Wars Datatable With Hooks</h1>
      <table>
        <Thead />
        <Tbody data={filteredData} />
      </table>
    </div>
  );
};

export default Table;
