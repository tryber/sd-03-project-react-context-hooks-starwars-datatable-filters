import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const nameFilter = (handler) => (
  <input type="text" onChange={(e) => handler(e.target.value)} />
);

const comparisonSelector = () => (
  <select
    id="comparison-filter"
    className="dropdown"
    data-testid="comparison-filter"
  >
    <option>maior que</option>
    <option>menor que</option>
    <option>igual a</option>
  </select>
);

const valueInput = () => (
  <input
    id="value-filter"
    className="value-filter"
    data-testid="value-filter"
    type="number"
  />
);

const columnSelector = (storedFilters) => {
  const dropdownFilter = (filters, value) => !filters.find(({ column }) => column === value);
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  return (
    <select
      id="column-filter"
      className="dropdown"
      data-testid="column-filter"
    >
      {columns.map((column) => (dropdownFilter(storedFilters, column)))}
      {columns.map((column) => <option value={column} key={column}>{column}</option>)}
    </select>
  );
};

const filterButton = (handler) => (
  <button
    data-testid="button-filter"
    onClick={handler}
    className="filter-button"
    type="button"
  >
    Filtrar
  </button>
);

const Filters = () => {
  const {
    filters: { filterByNumericValue },
    handlers: { setNameFilter, setFilterByNumericValue },
  } = useContext(PlanetsContext);

  const handleNumericFilters = () => {
    const column = document.getElementById('column-filter').value;
    const comparison = document.getElementById('comparison-filter').value;
    // eslint-disable-next-line prefer-destructuring
    const value = document.getElementById('value-filter').value;
    setFilterByNumericValue(() => {
      const filters = [...filterByNumericValue];
      filters.push({ column, comparison, value });
      return filters;
    });
  };
  return (
    <div>
      <div>
        {nameFilter(setNameFilter)}
      </div>
      <div>
        {columnSelector(filterByNumericValue)}
        {comparisonSelector()}
        {valueInput()}
        {filterButton(handleNumericFilters)}
      </div>
    </div>
  );
};

export default Filters;
