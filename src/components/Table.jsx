import React, { useContext, useEffect, useState } from 'react';
import getPlanets from '../services/PlanetsAPI';
import { StarWarsContext } from '../context/StarWarsContext';
import Numericfilters from './NumericFilters';
import Filter from './Filter';
import Orderfilter from './OrderFilter';

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
    return (planet) => +planet[column] > +value;
  }
  if (comparison === 'menor que') {
    return (planet) => +planet[column] < +value;
  }
  if (comparison === 'igual a') {
    return (planet) => planet[column] === value;
  }
}

function sortFunction(column) {
  return (a, b) => {
    if (a[column] > b[column]) {
      return 1;
    }
    if (a[column] < b[column]) {
      return -1;
    }
    return 0;
  };
}

export default function Table() {
  const store = useContext(StarWarsContext);
  //   const [planetsFiltered, setPlanetsFiltered] = useState([]);

  useEffect(() => {
    getPlanets().then((r) => {
      store.setPlanets(r);
      store.setPlanetsFiltered(r.sort(sortFunction('name')));
    });
  }, []);

  useEffect(() => {
    let { planets } = store;
    store.filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
      planets = planets.filter(filter(column, comparison, value));
    });
    store.setPlanetsFiltered(planets);
  }, [store.filters.filterByNumericValues]);

  //   useEffect(() => {
  //     let { planetsFiltered: planets, filters } = store;

  //     console.log(filters.order);

  //     planets = filters.order.sort !== 'DESC'
  //       ? planets.sort(sortFunction(filters.order.column))
  //       : planets.sort(sortFunction(filters.order.column)).reverse();

  //     store.setPlanetsFiltered(planets);
  //   }, [store.filters.order]);

  function setFilterByName(e) {
    store.changeFilterByName(e.target.value);
    store.setPlanetsFiltered(store.planets.filter(({ name }) => name.includes(e.target.value)));
  }

  return (
    store.planets.length
      ? (
        <div>
          <button type="button" onClick={() => console.log(store)}>State</button>
          <Numericfilters />
          <Orderfilter />
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
                  {Object.values(planet).map((e, i) => (i === 0 ? <td data-testid="planet-name" key={e}>{e}</td> : <td key={e}>{e}</td>))}
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      )
      : <p>Loading</p>
  );
}
