import React from 'react';

const TableRow = (planet) => (
  <tr key={planet.url}>
    <td>{planet.name}</td>
    <td>{planet.diameter}</td>
    <td>{planet.population}</td>
    <td>{planet.climate}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.terrain}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.gravity}</td>
    <td>{(planet.films).map((mov) => (<a href={mov}>Veja!</a>))}</td>
    <td>{new Date(planet.created).toLocaleDateString()}</td>
    <td>{new Date(planet.edited).toLocaleDateString()}</td>
    <td>{(<a href={planet.url}>Visite!</a>)}</td>
  </tr>
);

export default TableRow;
