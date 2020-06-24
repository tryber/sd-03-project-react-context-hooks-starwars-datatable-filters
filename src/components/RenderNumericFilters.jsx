import React, { useState } from 'react';

const RenderColumn = (Val, setFunc) => (
  <label htmlFor="column-filter">
    Coluna:&nbsp;
    <select
      data-testid="column-filter"
      id="column-filter"
      onChange={({ target: { value } }) => setFunc(value)}
    >
      <option value="" />
      {columnFilter.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  </label>
);

const RenderComparison = (val, setFunc) => (
  <label htmlFor="comparison-filter">
    &nbsp;Comparação:&nbsp;
    <select
      id="comparison-filter"
      data-testid="comparison-filter"
      onChange={({ target: { value } }) => setFunc(value)}
    >
      <option value="" />
      {comparisonFilter.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  </label>
);

const RenderValue = (val, setFunc) => (
  <label htmlFor="value-filter">
    &nbsp;Valor:&nbsp;
    <input
      data-testid="value-filter"
      id="value-filter"
      onChange={({ target: { value } }) => setFunc(value)}
      type="text"
    />
  </label>
);

const RenderNumericFilters = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  return (
    <div>
      {RenderColumn(column, setColumn)}
      {RenderComparison(comparison, setComparison)}
      {RenderValue(value, setValue)}
    </div>
  );
};
