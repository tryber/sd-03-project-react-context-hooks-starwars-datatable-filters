import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function TableBody() {
  const { data } = useContext(StarWarsContext);
  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
