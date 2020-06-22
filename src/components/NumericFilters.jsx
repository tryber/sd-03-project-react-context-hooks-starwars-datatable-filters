import React, { useState, useContext } from 'react';

import { StarWarsContext } from '../context/StarWarsContext';

const colunmns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparation = ['maior que', 'menor que', 'igual a'];

export default function Numericfilters() {
  const { changeNumericFilter, filters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setcomparison] = useState('');
  const [value, setValue] = useState('');

  function numericFilter() {
    changeNumericFilter('add', { column, comparison, value });
    setColumn('');
    setcomparison('');
    setValue('');
  }

  function getColumns() {
    const usedFilters = filters.filterByNumericValues.map((filter) => filter.column);
    return colunmns.filter((f) => !usedFilters.includes(f));
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        name=""
        id=""
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      >
        <option value="">Column</option>
        {getColumns().map((columnName) => <option key={columnName} value={columnName}>{columnName}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name=""
        id=""
        value={comparison}
        onChange={(e) => setcomparison(e.target.value)}
      >
        <option value="">compa</option>
        {comparation.map((compa) => <option key={compa} value={compa}>{compa}</option>)}
      </select>
      <input
        data-testid="value-filter"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="button" data-testid="button-filter" onClick={() => numericFilter()}>Filtrar</button>
    </div>
  );
}
