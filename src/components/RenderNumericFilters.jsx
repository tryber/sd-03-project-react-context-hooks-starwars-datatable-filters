import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = [
  'maior que',
  'igual a',
  'menor que',
];

const RenderColumn = (columnSelect, setFunc, val) => (
  <label htmlFor="column-filter">
    Coluna:&nbsp;
    <select
      data-testid="column-filter"
      id="column-filter"
      onChange={({ target: { value } }) => setFunc(value)}
      value={val}
    >
      <option value="">Choose a column</option>
      {columnSelect.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  </label>
);

const RenderComparison = (setFunc, val) => (
  <label htmlFor="comparison-filter">
    &nbsp;Comparação:&nbsp;
    <select
      id="comparison-filter"
      data-testid="comparison-filter"
      onChange={({ target: { value } }) => setFunc(value)}
      value={val}
    >
      <option value="">Choose a comparison</option>
      {comparisons.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  </label>
);

const RenderValue = (setFunc, val) => (
  <label htmlFor="value-filter">
    &nbsp;Valor:&nbsp;
    <input
      data-testid="value-filter"
      id="value-filter"
      onChange={({ target: { value } }) => setFunc(value)}
      type="text"
      value={val}
    />
  </label>
);

const RenderButton = (func, func2, { column, comparison, value }) => (
  <button
    data-testid="button-filter"
    disabled={column === '' || comparison === '' || value === 0}
    onClick={() => { func({ column, comparison, value }); func2(column); }}
    type="button"
  >
    Submit filter
  </button>
);

const RenderSomeText = (activeFilters, func, func2) => (
  <div>
    {activeFilters.map(({ column, comparison, value }) => (
      <div
        data-testid="filter"
        key={column}
      >
        <p>{`${column} ${comparison} ${value}`}</p>
        <button
          onClick={() => { func(column); func2({ column, comparison, value }); }}
          type="button"
        >
          X
        </button>
      </div>
    ))}
  </div>
);

const RenderNumericFilters = () => {
  const [column, setColumn] = useState('');
  const [columnSelect, setColumnSelect] = useState(columns);
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const {
    filterData: {
      filters: {
        filterByNumericValues,
      },
      setFilterByNumericValues,
      setRemoveFilters,
    },
  } = useContext(StarWarsContext);
  const filterSelect = (col) => setColumnSelect(columnSelect.filter((select) => select !== col));
  const addSelect = (col) => setColumnSelect([...columnSelect, col]);

  return (
    <div>
      {RenderColumn(columnSelect, setColumn, column)}
      {RenderComparison(setComparison, comparison)}
      {RenderValue(setValue, value)}
      {RenderButton(
        setFilterByNumericValues,
        filterSelect,
        { column, comparison, value },
      )}
      {filterByNumericValues.length > 0
      && RenderSomeText(
        filterByNumericValues,
        addSelect,
        setRemoveFilters,
      )}
    </div>
  );
};

export default RenderNumericFilters;
