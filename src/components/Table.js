import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from './StarWarsContext';
import PlanetLine from './PlanetLine';
import TableHeader from './TableHeader';

function Table() {
  const {
    isFetching,
    data,
    error,
    fetchPlanetList,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: numericFilters,
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanetList();
  }, []);

  const filterPlanets = () => {
    const filterName = data.filter((planet) => (planet.name.toLowerCase()).includes(name));
    if (numericFilters.length !== 0) {
      return numericFilters.reduce((newList, { column, comparison, value }) =>
        newList.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          return planet;
        })
        , filterName);
    }
    return (filterName);
  };

  if (isFetching) { return <p>Loading...</p>; }

  if (data.length > 0) {
    return (
      <table className="table-div">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {filterPlanets().map((planet) => <PlanetLine planet={planet} key={planet.name} />)}
        </tbody>
      </table>
    );
  }
  return <p>{error}</p>;
}

export default Table;
