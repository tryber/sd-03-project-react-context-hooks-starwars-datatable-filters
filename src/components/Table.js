import React, { useContext, useEffect, useState } from 'react';
import orderFuncAsc from './orderFuncAsc';
import orderFuncDesc from './orderFuncDesc';
import StarWarsContext from '../context/StarWarsContext';

const TableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Rotation Period</th>
      <th>Orbital Period</th>
      <th>Diameter</th>
      <th>Climate</th>
      <th>Gravity</th>
      <th>Terrain</th>
      <th>Surface Water</th>
      <th>Population</th>
      <th>Film</th>
      <th>Created</th>
      <th>Edited</th>
      <th>Url</th>
    </tr>
  </thead>
);

function TableBody() {
  const [planets, setPlanets] = useState([]);
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    const filtered =
      sort === 'ASC'
        ? orderFuncAsc(data, name, numericValues, columnSort)
        : orderFuncDesc(data, name, numericValues, columnSort);
    setPlanets(filtered);
  }, [name, numericValues, columnSort, sort]);

  return (
    <div>
      {TableHead()}
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
    </div>
  );
}

export default TableBody;
