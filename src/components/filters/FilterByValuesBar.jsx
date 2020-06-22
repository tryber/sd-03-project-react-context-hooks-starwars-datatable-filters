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

function FilterByValuesBar() {
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
  } = useContext(PlanetTableContext);
  const [columnValue, setColumnValue] = useState('');
  const [comparisonValue, setComparisonValue] = useState('');
  const [valueState, setValueState] = useState('');

  const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

  const renderColumnFilter = () => (
    <select
      id="column-filter"
      data-testid="column-filter"
      value={columnValue}
      onChange={(event) => setColumnValue(event.target.value)}
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
      value={comparisonValue}
      data-testid="comparison-filter"
      onChange={(event) => setComparisonValue(event.target.value)}
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
      value={valueState}
      data-testid="value-filter"
      placeholder="digite um valor"
      onChange={(event) => setValueState(event.target.value)}
    />
  );

  const renderSubmitFiltersButton = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={
        (() => setFilterByNumericValues({
          columnValue,
          comparisonValue,
          valueState,
        }),
        () => ((setColumnValue(''), setComparisonValue(''), setColumnValue(''))))
      }
      disabled={
        columnValue === '' || comparisonValue === '' || valueState === ''
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
