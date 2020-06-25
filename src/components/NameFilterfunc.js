import React from 'react';

const NameFilterfunc = (value, names) => value.filter(
  (planet) => planet.name.toLowerCase().includes(names)).map((row) => (
    <tbody>
      <tr>
        <td data-testid="planet-name">{row.name}</td>
        <td>{row.climate}</td>
        <td>{row.created}</td>
        <td>{row.diameter}</td>
        <td>{row.edited}</td>
        <td>{row.films}</td>
        <td>{row.gravity}</td>
        <td>{row.orbital_period}</td>
        <td>{row.population}</td>
        <td>{row.rotation_period}</td>
        <td>{row.surface_water}</td>
        <td>{row.terrain}</td>
        <td>{row.url}</td>
      </tr>
    </tbody>
  )
);

export default NameFilterfunc
