import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import TableBodyContent from './TableBodyContent';

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
      case 'maior que':
        return planets.filter(
          (planet) => Number(planet[column]) > Number(value),
        );
      case 'menor que':
        return planets.filter(
          (planet) => Number(planet[column]) < Number(value),
        );
      case 'igual a':
        return planets.filter(
          (planet) => Number(planet[column]) === Number(value),
        );
      default:
        return planets;
    }
  };
  const filterByParams = (arrPlanets, numericValues) => {
    let arrFiltered = filterByName(arrPlanets, name);
    numericValues.forEach(
      (filtro) => (arrFiltered = filterByInputs(arrFiltered, filtro)),
    );
    return arrFiltered;
  };
  const filteredPlanets = filterByParams(data, filterByNumericValues);
  return <TableBodyContent planets={filteredPlanets} />;
}

export default TableBody;
