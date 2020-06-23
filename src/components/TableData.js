import React, { useContext } from 'react';
import FiltersContext from '../context/toFilter/FiltersContext';
import filterData from '../services/filterData';

function TableData({ planets }) {
  const { filters } = useContext(FiltersContext);
  return (
    filterData(filters, planets).map((planeta) =>
      <tr key={planeta.name}>
        <td>{planeta.name}</td>
        <td>{planeta.population}</td>
        <td>{planeta.climate}</td>
        <td>{planeta.created}</td>
        <td>{planeta.diameter}</td>
        <td>{planeta.edited}</td>
        <td>{planeta.orbital_period}</td>
        <td>{planeta.rotation_period}</td>
        <td>{planeta.terrain}</td>
        <td>{planeta.surface_water}</td>
        <td>{planeta.films}</td>
        <td>{planeta.gravity}</td>
        <td>{planeta.url}</td>
      </tr>,
    )
  );
}

export default TableData;
