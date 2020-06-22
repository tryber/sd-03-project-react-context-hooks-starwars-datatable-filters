import React, { useContext, useEffect, useState } from 'react';
import getPlanets from '../services/PlanetsAPI';
import { StarWarsContext } from '../context/StarWarsContext';
import Numericfilters from './NumericFilters';
import Filter from './Filter';

const headers = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function filter(column, comparison, value) {
  if (comparison === 'maior que') {
    console.log(comparison);
    return (planet) => +planet[column] > +value;
  }
  if (comparison === 'menor que') {
    console.log(comparison);
    return (planet) => +planet[column] < +value;
  }
  if (comparison === 'igual a') {
    console.log(comparison);
    return (planet) => planet[column] === value;
  }
}

export default function Table() {
  const store = useContext(StarWarsContext);
  //   const [planetsFiltered, setPlanetsFiltered] = useState([]);

  useEffect(() => {
    getPlanets().then((r) => {
      store.setPlanets(r);
      store.setPlanetsFiltered(r);
    });
  }, []);

  useEffect(() => {
    let { planets } = store;
    store.filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
      planets = planets.filter(filter(column, comparison, value));
    });
    store.setPlanetsFiltered(planets);
  }, [store.filters.filterByNumericValues]);

  function setFilterByName(e) {
    console.log('change');
    store.changeFilterByName(e.target.value);
    store.setPlanetsFiltered(store.planets.filter(({ name }) => name.includes(e.target.value)));
  }

  return (
    store.planets.length
      ? (
        <div>
          <button type="button" onClick={() => console.log(store)}>State</button>
          <Numericfilters />
          <div>
            {store.filters.filterByNumericValues.map((f) => <Filter key={f.column} {...f} />)}
          </div>

          <input
            type="text"
            data-testid="name-filter"
            value={store.filters.filterByName.name}
            onChange={(e) => setFilterByName(e)}
          />
          <table>
            <thead>
              <tr>
                {headers.map((head) => <th key={head}>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {store.planetsFiltered.map((planet) => (
                <tr key={planet.name}>
                  {Object.values(planet).map((e) => <td key={e}>{e}</td>)}
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      )
      : <p>Loading</p>
  );
}
