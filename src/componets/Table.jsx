import React from 'react';
import { useContext } from 'react';
import PlanetsApi from './PlanetsApi';
import FilterPlanets from './FilterPlanets';
import { starWarsContext } from '../context/starWarsContext';
import RemoveFilter from './RemoveFilter';

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
  const {
    planets,
    allFilters: {
      filters: {
        filterByName: { name },
      } },
  } = useContext(starWarsContext);
  const { allFilters: { filters: { filterByNumericValues } } } = useContext(starWarsContext);

  const filteredPlanet = () => {
    if (name !== '') {
      return planets.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
    }
    return planets;
  };

  const filterSelectedValues = () => {
    if (filterByNumericValues) {
      return filterByNumericValues.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => switchComparison(column, comparison, value, planet)),
        filteredPlanet(planets),
      );
    }
    return filteredPlanet(planets);
  };

  const planetsData = planets;

  return (
    <div>
      <FilterPlanets />
      <RemoveFilter />
      <PlanetsApi planets={filterSelectedValues(planetsData)} />
    </div>
  );
};

export default Table;
