import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnOptions = [
  'select column',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = [
  'select',
  'maior que',
  'igual a',
  'menor que',
];

let newColumnOptions = [...columnOptions];

let showFilter = true;

const verifyColumns = (obj) => {
  if (obj.length > 1) {
    showFilter = true;
  } else {
    showFilter = false;
  }
};

const filterMenu = (numericValuesFilter) => {
  const filterColumnArray = numericValuesFilter.map(({ column }) => column);
  newColumnOptions = [...columnOptions];
  let index;
  for (let i = 0; i < filterColumnArray.length; i += 1) {
    index = newColumnOptions.indexOf(filterColumnArray[i]);
    if (index > -1) {
      newColumnOptions.splice(index, 1);
    }
  }
};

const NumericFilter = () => {
  const [stateColumn, setStateColumn] = useState('');
  const [stateComparison, setStateComparison] = useState('');
  const [stateValue, setStateValue] = useState('');
  const { filters, setFilterByNumericValues } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const handleChange = () => {
    if (filterByNumericValues[0].column === '') {
      setFilterByNumericValues(
        [{ column: stateColumn, comparison: stateComparison, value: stateValue }],
      );
    } else {
      setFilterByNumericValues([
        ...filterByNumericValues,
        { column: stateColumn, comparison: stateComparison, value: stateValue },
      ]);
    }
    setStateColumn(''); setStateComparison(''); setStateValue('');
  };
  const filterForms = () =>
    <div>
      <label htmlFor="column-filter">Filtre por coluna</label>
      <select
        data-testid="column-filter" name="column-filter"
        onChange={(e) => setStateColumn(e.target.value)} value={stateColumn}
      >
        {newColumnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <label htmlFor="comparison-filter">Condição</label>
      <select
        data-testid="comparison-filter" name="comparison-filter"
        onChange={(e) => setStateComparison(e.target.value)} value={stateComparison}
      >
        {comparisonOptions.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <label htmlFor="value-filter">Valor</label>
      <input
        data-testid="value-filter" type="number" maxLength="12"
        onChange={(e) => setStateValue(e.target.value)} value={stateValue}
      />
      <button
        data-testid="button-filter" onClick={() => handleChange()}
      >Filtrar</button>
    </div>;
  filterMenu(filterByNumericValues); verifyColumns(columnOptions);
  return (<div>{showFilter && filterForms()}</div>);
};

export default NumericFilter;
