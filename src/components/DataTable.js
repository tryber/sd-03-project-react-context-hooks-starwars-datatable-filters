import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterData from './FilterData';

function DataTable() {
  const { stateFetch } = useContext(StarWarsContext);
  const { data } = stateFetch;

  const renderTableHead = () => (
    <thead>
      <tr>
        {Object.keys(data[0]).map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
  );

  const renderTable = () => (
    <table border="1px">
      {renderTableHead()}
      {FilterData(data)}
    </table>
  );

  return <div>{renderTable()}</div>;
}

export default DataTable;
