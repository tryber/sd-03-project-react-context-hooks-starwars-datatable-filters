import React, { useState, useContext } from 'react';
import { starWarsContext } from '../context/starWarsContext';


// valueFIlter prover um state pra ele
// valueFilter: state.filters.filterByNumericValues,

const FilterByNumeric = () => {
  const [value, setSelectInput] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setcomparison] = useState('');

  const { allFilters: { setfilterByNumericValues } } = useContext(starWarsContext);
  const { allFilters: { filters: { filterByNumericValues } } } = useContext(starWarsContext);

  function filterColumn(filterByNumericValues, option) {
    return !filterByNumericValues.find(({ column }) => column === option);
  }

  const onClick = () => {
    setfilterByNumericValues({ value, column, comparison })
  }

  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const comparisons = ['', 'maior que', 'igual a', 'menor que'];

  return (
    <div>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(e) => setSelectInput(e.target.value)}
      />
      <select
        data-testid="column-filter"
        onChange={(e) => setColumn(e.target.value)}
      >
        <option value="" />
        {columns.map((list) => (filterColumn(filterByNumericValues, list)
          && (<option key={list}>{list}</option>)))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => setcomparison(e.target.value)}
      >
        {comparisons.map((list) => <option key={list}>{list}</option>)}
      </select>
      <button
        type="button"
        data-testid="button-filter"
        onClick={onClick}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumeric;
