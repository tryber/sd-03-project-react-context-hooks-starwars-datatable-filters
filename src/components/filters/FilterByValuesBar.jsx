import React, { useContext, useState } from 'react';
import PlanetTableContext from '../../context/context';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const initialState = {
  column: '',
  comparison: '',
  value: '',
};

function FilterByValuesBar() {
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
  } = useContext(PlanetTableContext);

  const [filterByNumeric, setFilterByNumeric] = useState({
    ...initialState,
  });

  const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

  const renderColumnFilter = () => (
    <select
      id="column-filter"
      data-testid="column-filter"
      value={filterByNumeric.column}
      onChange={(event) => setFilterByNumeric({
        ...filterByNumeric,
        column: event.target.value,
      })}
    >
      <option value="" />
      {columns.map(
        (column) => filterColumnsOptions(filterByNumericValues, column) && (
        <option value={column} key={column}>
          {column}
        </option>
        ),
      )}
    </select>
  );

  const renderComparisonFilter = () => (
    <select
      name="comparison-filter"
      id="comparison-filter"
      value={filterByNumeric.comparison}
      data-testid="comparison-filter"
      onChange={(event) => setFilterByNumeric({
        ...filterByNumeric,
        comparison: event.target.value,
      })}
    >
      <option value="" />
      {comparisons.map((comparison) => (
        <option value={comparison} key={comparison}>
          {comparison}
        </option>
      ))}
    </select>
  );

  const renderValueFilter = () => (
    <input
      type="number"
      name="value-filter"
      id="value-filter"
      value={filterByNumeric.value}
      data-testid="value-filter"
      placeholder="digite um valor"
      onChange={(event) => setFilterByNumeric({
        ...filterByNumeric,
        value: event.target.value,
      })}
    />
  );

  const renderSubmitFiltersButton = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={() => ((
        setFilterByNumericValues({
          ...filterByNumeric,
        }),
        setFilterByNumeric({
          ...initialState,
        })
      ))}
      disabled={
        filterByNumeric.column === ''
        || filterByNumeric.comparison === ''
        || filterByNumeric.value === ''
      }
    >
      Filtrar
    </button>
  );

  return (
    <div>
      {renderColumnFilter()}
      {renderComparisonFilter()}
      {renderValueFilter()}
      {renderSubmitFiltersButton()}
    </div>
  );
}

export default FilterByValuesBar;
