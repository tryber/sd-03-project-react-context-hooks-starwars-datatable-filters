import React from 'react';
import { useContext } from 'react';
import PlanetsApi from './PlanetsApi';
import FilterPlanets from './FilterPlanets';
import { starWarsContext } from '../context/starWarsContext';

const switchComparison = (column, comparison, value, planet) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
};

const Table = () => {
  const { selectInput, filterByName, planets } = useContext(starWarsContext);
  console.log(planets);

  // const filteredPlanet = () => {
  //   if (filterByName !== '') {
  //     return planets.filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()));
  //   }
  //   return planets;
  // };

  // const filterSelectedValues = () => {
  //   if (selectInput) {
  //     return selectInput.reduce(
  //       (acc, { column, comparison, value }) =>
  //         acc.filter((planet) => switchComparison(column, comparison, value, planet)),
  //       filteredPlanet(planets),
  //     );
  //   }
  //   return filteredPlanet(planets);
  // };

  const planetsData = planets;

  return (
    <div>
      <FilterPlanets />
      <PlanetsApi />
      {/* {filterSelectedValues(planetsData)} */}
    </div>
  );
};

export default Table;
