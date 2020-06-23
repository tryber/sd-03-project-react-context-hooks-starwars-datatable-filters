import React, { useContext, useState } from 'react';
import PlanetTableContext from '../../context/context';

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
  order: '',
};

function SortColumnsFilter() {
  const { setOrderFilter } = useContext(PlanetTableContext);

  const [sortFilter, setSortFilter] = useState({ ...initialState });

  const renderColumnSelect = () => (
    <select
      data-testid="column-sort"
      onChange={(event) => setSortFilter({ ...sortFilter, column: event.target.value })}
    >
      {columns.map((column) => (
        <option value={column.toLowerCase()} key={column}>
          {column}
        </option>
      ))}
    </select>
  );

  const renderSortSelect = () => (
    <div>
      <label htmlFor="ASC">
        ASC
        <input
          name="sort_radio"
          type="radio"
          data-testid="column-sort-input"
          value="ASC"
          defaultChecked
          onChange={(event) => setSortFilter({ ...sortFilter, order: event.target.value })}
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          name="sort_radio"
          type="radio"
          data-testid="column-sort-input"
          value="DESC"
          onChange={(event) => setSortFilter({ ...sortFilter, order: event.target.value })}
        />
      </label>
    </div>
  );

  const renderSubmitButton = () => (
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => setOrderFilter({ ...sortFilter })}
    >
      Ordenar
    </button>
  );

  return (
    <div>
      {renderColumnSelect()}
      {renderSortSelect()}
      {renderSubmitButton()}
    </div>
  );
}

export default SortColumnsFilter;
