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

const renderColumnFilter = (callback1, callback2, object, array) => (
  <select
    id="column-filter"
    data-testid="column-filter"
    value={object.column}
    onChange={(event) => callback1({
      ...object,
      column: event.target.value,
    })}
  >
    <option>Escolha uma coluna</option>
    {columns.map(
      (column) => callback2(array, column) && (
      <option value={column} key={column}>
        {column}
      </option>
      ),
    )}
  </select>
);

const renderComparisonFilter = (callback, object) => (
  <select
    name="comparison-filter"
    id="comparison-filter"
    value={object.comparison}
    data-testid="comparison-filter"
    onChange={(event) => callback({
      ...object,
      comparison: event.target.value,
    })}
  >
    <option>Escolha um comparador</option>
    {comparisons.map((comparison) => (
      <option value={comparison} key={comparison}>
        {comparison}
      </option>
    ))}
  </select>
);

const renderValueFilter = (callback, object) => (
  <input
    type="number"
    name="value-filter"
    id="value-filter"
    value={object.value}
    data-testid="value-filter"
    placeholder="digite um valor"
    onChange={(event) => callback({
      ...object,
      value: event.target.value,
    })}
  />
);

const renderSubmitFiltersButton = (callback1, callback2, object) => (
  <button
    type="button"
    data-testid="button-filter"
    onClick={() => ((
      callback1({
        ...object,
      }),
      callback2({
        ...initialState,
      })
    ))}
    disabled={
      object.column === '' || object.comparison === '' || object.value === ''
    }
  >
    Filtrar
  </button>
);

function FilterByValuesBar() {
  const {
    filterMethods: {
      filters: { filterByNumericValues },
      setFilterByNumericValues,
    },
  } = useContext(PlanetTableContext);

  const [filterByNumeric, setFilterByNumeric] = useState({
    ...initialState,
  });

  const filterColumnsOptions = (filters, value) => !filters.find(({ column }) => column === value);

  return (
    <div>
      {renderColumnFilter(
        setFilterByNumeric,
        filterColumnsOptions,
        filterByNumeric,
        filterByNumericValues,
      )}
      {renderComparisonFilter(setFilterByNumeric, filterByNumeric)}
      {renderValueFilter(setFilterByNumeric, filterByNumeric)}
      {renderSubmitFiltersButton(
        setFilterByNumericValues,
        setFilterByNumeric,
        filterByNumeric,
      )}
    </div>
  );
}

export default FilterByValuesBar;
