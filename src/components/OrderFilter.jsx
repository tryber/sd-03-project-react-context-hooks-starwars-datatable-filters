import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const colunmns = [
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

function sortFunction(column) {
  return (a, b) => {
    if (+a[column] > +b[column]) {
      return 1;
    }
    if (+a[column] < +b[column]) {
      return -1;
    }
    return 0;
  };
}

export default function Orderfilter() {
  const {
    changeOrderFilter, setPlanetsFiltered, planetsFiltered,
  } = useContext(StarWarsContext);

  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');

  function setFilter() {
    changeOrderFilter({ column, sort });

    const planets = sort !== 'DESC'
      ? planetsFiltered.sort(sortFunction(column))
      : planetsFiltered.sort(sortFunction(column)).reverse();

    setPlanetsFiltered(planets);
  }

  return (
    <div>
      <form>
        <label>
          ASC
          <input
            checked={sort === 'ASC'}
            type="radio"
            name="order"
            value="ASC"
            onChange={(e) => setSort(e.target.value)}
            data-testid="column-sort-input-asc"
          />
        </label>
        <label>
          DESC
          <input
            data-testid="column-sort-input-desc"
            checked={sort === 'DESC'}
            type="radio"
            name="order"
            value="DESC"
            onChange={(e) => setSort(e.target.value)}
          />
        </label>
        <select name="" id="" onChange={(e) => setColumn(e.target.value)} value={column} data-testid="column-sort">
          {colunmns
            .map((columnName) => <option key={columnName} value={columnName}>{columnName}</option>)}
        </select>

        <button data-testid="column-sort-button" onClick={setFilter} type="button">Order</button>

      </form>

    </div>
  );
}
