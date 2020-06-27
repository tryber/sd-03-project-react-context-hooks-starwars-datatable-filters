import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const filterDataByPlanetName = (data, name) => data.filter(
  (planet) => planet.name.toLowerCase().match(name.toLowerCase()),
);

const matchComparison = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    default:
      return [];
  }
};

export const filterDataByNumericValue = (filters, data) => {
  console.log(filters);
  return filters
    .reduce((acc, { column, comparison, value }) => acc
      .filter((element) => matchComparison(column, comparison, value, element)),
    data);
};

const renderColumns = (column) => {
  if (column === 'residents') return null;
  return <th>{column}</th>;
};

const TableHead = (data) => {
  const columns = Object.keys(data[0]);
  return (
    <thead>
      <tr>
        {columns.map(renderColumns)}
      </tr>
    </thead>
  );
};

const TableBody = (data) => (
  <tbody>
    {data.map((planet) => (
      <tr>
        {Object.values(planet).map((value) => <td>{value}</td>)}
      </tr>
    ))}
  </tbody>

);

const Table = () => {
  const {
    data,
    filters: { filterByNumericValue, filterByName: { name } },
  } = useContext(PlanetsContext);
  if (data !== null) {
    const sortedData = filterDataByNumericValue(
      filterByNumericValue, filterDataByPlanetName(data, name),
    );
    return (
      <table>
        {TableHead(data)}
        {TableBody(sortedData)}
      </table>
    );
  }
  return <p>Carregando...</p>;
};

export default Table;
