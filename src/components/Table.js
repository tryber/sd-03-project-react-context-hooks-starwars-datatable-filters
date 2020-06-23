import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const renderColumns = (column) => {
  if (column === 'residents') return null;
  return <th>{column}</th>;
};

const TableHead = (data) => {
  const columns = Object.keys(data[0]);
  return (
    <tr>
      {columns.map(renderColumns)}
    </tr>
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
  const { data, filters: { filterByName: { name } } } = useContext(PlanetsContext);
  if (data !== null) {
    const sortedData = data.filter((planet) => planet.name.toLowerCase().match(name.toLowerCase()));
    return (
      <table>
        {TableHead(sortedData)}
        {TableBody(sortedData)}
      </table>
    );
  }
  return <p>Carregando...</p>;
};

export default Table;
