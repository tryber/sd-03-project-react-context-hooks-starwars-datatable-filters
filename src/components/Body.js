import React, { useContext, useState, useEffect } from 'react';
import orderFuncAsc from './orderFuncAsc';
import orderFuncDesc from './orderFuncDesc.js';
import { StarContext } from './Context';

function Body() {
  const [planets, setPlanets] = useState([]);
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },
  } = useContext(StarContext);

  useEffect(() => {
    const filtered =
      sort === 'ASC'
        ? orderFuncAsc(data, name, numericValues, columnSort)
        : orderFuncDesc(data, name, numericValues, columnSort);
    setPlanets(filtered);
  }, [data, name, numericValues, columnSort, sort]);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Body;
