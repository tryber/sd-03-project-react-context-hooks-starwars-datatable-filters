import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const columns = [
  'Name',
  'Rotation_period',
  'Orbital_period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface_water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

const initialState = {
  column: 'name',
  sort: '',
};

const renderColumnSelect = (callback, object) => (
  <select
    data-testid="column-sort"
    onChange={(event) => callback({ ...object, column: event.target.value })}
  >
    {columns.map((column) => (
      <option value={column.toLowerCase()} key={column}>
        {column}
      </option>
    ))}
  </select>
);

const renderSortSelect = (callback, object) => (
  <div>
    <label htmlFor="ASC">
      ASC
      <input
        name="sort_radio"
        type="radio"
        data-testid="column-sort-input-asc"
        value="ASC"
        defaultChecked
        onChange={(event) => callback({ ...object, sort: event.target.value })}
      />
    </label>
    <label htmlFor="DESC">
      DESC
      <input
        name="sort_radio"
        type="radio"
        data-testid="column-sort-input-desc"
        value="DESC"
        onChange={(event) => callback({ ...object, sort: event.target.value })}
      />
    </label>
  </div>
);

const renderSubmitButton = (callback, object) => (
  <button
    className="button is-dark is-small"
    type="button"
    data-testid="column-sort-button"
    onClick={() => callback({ ...object })}
  >
    Ordenar
  </button>
);

function SortColumnsFilter() {
  const {
    filterMethods: { setOrderFilter },
  } = useContext(StarWarsContext);

  const [sortFilter, setSortFilter] = useState({ ...initialState });

  return (
    <div className="level-item has-text-centered">
      {renderColumnSelect(setSortFilter, sortFilter)}
      {renderSortSelect(setSortFilter, sortFilter)}
      {renderSubmitButton(setOrderFilter, sortFilter)}
    </div>
  );
}

export default SortColumnsFilter;
