import React, { useState } from 'react';

// valueFIlter prover um state pra ele
// valueFilter: state.filters.filterByNumericValues,

const FilterByNumeric = () => {
  const [inputs, setSelectInput] = useState('');
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setcomparison] = useState('');

  // function filterColumn(valueFilter, option) {
  //   return !valueFilter.find(({ column }) => column === option);
  // }

  // const columns = ['population', 'orbital_period', 'diameter',
  //   'rotation_period', 'surface_water'];
  const comparisons = ['', 'maior que', 'igual a', 'menor que'];

  return (
    <div>
      <input
        data-testid="value-filter"
        onChange={(e) => setValue(value, e.target.value)}
      />
      <select
        data-testid="column-filter"
        onChange={(e) => setColumn(column, e.target.value)}
      >
        <option value="" />
        {/* {columns.map((list) => (filterColumn(valueFilter, list)
          && (<option key={list}>{list}</option>)))} */}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => setcomparison(comparison, e.target.value)}
      >
        {comparisons.map((list) => <option key={list}>{list}</option>)}
      </select>
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setSelectInput(inputs)}
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterByNumeric;
