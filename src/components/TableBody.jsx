import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function TableBody() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);
  const filterByName = (planets, searched) =>
    planets.filter((planet) => planet.name.includes(searched));
  const filterByInputs = (planets, { column, comparison, value }) => {
    switch (comparison) {
      case "maior que":
        return planets.filter(
          (planet) => Number(planet[column]) > Number(value)
        );
      case "menor que":
        return planets.filter(
          (planet) => Number(planet[column]) < Number(value)
        );
      case "igual a":
        return planets.filter(
          (planet) => Number(planet[column]) === Number(value)
        );
      default:
        return planets;
    }
  };
  const filterByParams = (arrPlanets, numericValues) => {
    let arrFiltered = filterByName(arrPlanets, name);
    numericValues.forEach(
      (filtro) => (arrFiltered = filterByInputs(arrFiltered, filtro))
    );
    return arrFiltered;
  };
  const planets = filterByParams(data, filterByNumericValues);
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
