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
  const { data } = useContext(PlanetsContext);
  if (data !== null) {
    return (
      <table>
        {TableHead(data)}
        {TableBody(data)}
      </table>
    );
  }
  return <p>Carregando...</p>;
};

export default Table;
