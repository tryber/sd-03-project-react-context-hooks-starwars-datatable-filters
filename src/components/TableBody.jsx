import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function TableBody() {
  const { data, filters: { filterByName: { name } } } = useContext(StarWarsContext);

  const filterByName = (planets, searched) => (
    planets.filter((planet) => planet.name.includes(searched))
  );

  const filterByParams = (arrPlanets) => {
    // const { planets, numericValues, selectedOrder } = this.props;

    const arrFiltered = filterByName(arrPlanets, name);
    // this.sortBySelectedOrder(arrFiltered, selectedOrder);

    // numericValues.forEach(
    //   (filtro) =>
    //     (arrFiltered = Table.filterByNumericValues(arrFiltered, filtro))
    // );

    return arrFiltered;
  };

  const planets = filterByParams(data);

  return (
    <tbody>
      {planets.map((planet) => (
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
